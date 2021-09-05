import { useState } from "react";
import { BsFillPersonFill, BsPlusCircle } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { RiLoginBoxLine, RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { insertUser } from "../../api";
import { LoginModal, SignupModal } from "../userAuthentication";
import styles from "./index.module.css";

const ProfileButton = ({ isLogged, setIsLogged, darkMode, profileData }) => {
    const [popupMenuIsOpen, setPopupMenuIsOpen] = useState(false);
    const [signUpIsOpen, setSignUpIsOpen] = useState(false);
    const [loginIsOpen, setLoginIsOpen] = useState(false);

    const handleClick = () => {
        setPopupMenuIsOpen(!popupMenuIsOpen);
    };

    const handleSignUpModal = ({ name, userName, email, password, close }) => {
        if (close) {
            setSignUpIsOpen(false);
            return;
        }

        insertUser(name, userName, email, password);
    };

    const handleLoginModal = (email, password) => {
        setLoginIsOpen(false);

        setIsLogged(true);
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
                        setIsLogged={setIsLogged}
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
    const PopUpMenuItems = () => {
        return isLogged ? (
            <>
                <span>
                    <BsFillPersonFill size={30} />
                    <Link to="/profile">My Profile</Link>
                </span>
                <span>
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
