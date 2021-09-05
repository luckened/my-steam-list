import { useState } from "react";
import { BsFillPersonFill, BsPlusCircle } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { RiLoginBoxLine, RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { insertUser, login } from "../../api";
import { LoginModal, SignupModal } from "../userAuthentication";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";

const ProfileButton = ({ isLogged, darkMode, profileData }) => {
    const [popupMenuIsOpen, setPopupMenuIsOpen] = useState(false);
    const [signUpIsOpen, setSignUpIsOpen] = useState(false);
    const [loginIsOpen, setLoginIsOpen] = useState(false);

    const handleClick = () => {
        setPopupMenuIsOpen(!popupMenuIsOpen);
    };

    const handleSignUpModal = async ({
        name,
        userName,
        email,
        password,
        close,
    }) => {
        if (close) {
            setSignUpIsOpen(false);
            return;
        }
        const inserted = await insertUser(name, userName, email, password);

        if (inserted) {
            toast.success("Usuario cadastrado com sucesso!", {
                position: toast.POSITION.TOP_CENTER,
            });
            setSignUpIsOpen(false);
        } else {
            toast.error("Erro!\nemail ou username ja existentes");
        }
    };

    const handleLoginModal = async (email, password) => {
        const isLogged = await login(email, password);

        if (isLogged) {
            window.location.reload();
        } else {
            toast.error("Erro!\nemail ou senha incorretos");
        }

        setLoginIsOpen(false);
    };

    const { image: profileImage } = profileData;
    return (
        <>
            <button className={`${styles.profileButton}`} onClick={handleClick}>
                {isLogged ? (
                    <img src={profileImage} alt="profile"></img>
                ) : (
                    <IoPersonCircle size={63.28} />
                )}
                {popupMenuIsOpen && (
                    <PopupMenu
                        isLogged={isLogged}
                        darkMode={darkMode}
                        openLogin={setLoginIsOpen}
                        openSignUp={setSignUpIsOpen}
                    />
                )}
            </button>
            {loginIsOpen && (
                <LoginModal
                    openLogin={setLoginIsOpen}
                    handleLogin={handleLoginModal}
                />
            )}
            {signUpIsOpen && (
                <SignupModal
                    openSignUp={setSignUpIsOpen}
                    handleSignUp={handleSignUpModal}
                />
            )}
        </>
    );
};

const PopupMenu = ({ isLogged, darkMode, openLogin, openSignUp }) => {
    const history = useHistory();

    const PopUpMenuItems = () => {
        const userId =
            isLogged && JSON.parse(localStorage.getItem("loggedUser")).id;

        return isLogged ? (
            <>
                <span>
                    <BsFillPersonFill size={30} />
                    <Link to={`/profile/${userId}`}>My Profile</Link>
                </span>
                <span
                    onClick={() => {
                        localStorage.removeItem("loggedUser");
                        history.push("/");
                        window.location.reload();
                    }}
                >
                    <RiLogoutBoxRLine size={30} />
                    Logout
                </span>
            </>
        ) : (
            <>
                <span onClick={() => openSignUp(true)}>
                    <BsPlusCircle size={30} />
                    Sign Up
                </span>
                <span onClick={() => openLogin(true)}>
                    <RiLoginBoxLine size={30} />
                    Login
                </span>
            </>
        );
    };

    return (
        <div
            className={`${styles.popupMenu} ${
                darkMode && styles.popupMenuDark
            }`}
        >
            <PopUpMenuItems />
        </div>
    );
};

export default ProfileButton;
