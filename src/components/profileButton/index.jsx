import { BsFillPersonFill, BsPlusCircle } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { RiLogoutBoxRLine, RiLoginBoxLine } from "react-icons/ri";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginModal, SignupModal } from "../userAuthentication";

const ProfileButton = ({ isLogged, setIsLogged, darkMode, profileData }) => {
    const [popupMenuIsOpen, setPopupMenuIsOpen] = useState(false);
    const [signUpIsOpen, setSignUpIsOpen] = useState(true);
    const [loginIsOpen, setLoginIsOpen] = useState(false);

    const handleClick = () => {
        setPopupMenuIsOpen(!popupMenuIsOpen);
    };

    const handleSignUpModal = ({ close }) => {
        if (close) {
            setSignUpIsOpen(false);
        } else {
            setSignUpIsOpen(!signUpIsOpen);
        }
    };

    const handleLoginModal = ({ close }) => {
        if (close) {
            setLoginIsOpen(false);
        } else if (isLogged) {
            setLoginIsOpen(false);
            setIsLogged(false);
        } else if (!isLogged && loginIsOpen) {
            setLoginIsOpen(false);
            setIsLogged(true);
        } else if (!isLogged && !loginIsOpen) {
            setLoginIsOpen(true);
        }
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
                        handleLoginModal={handleLoginModal}
                        handleSignUpModal={handleSignUpModal}
                    />
                )}
            </button>
            {loginIsOpen && <LoginModal handleLogin={handleLoginModal} />}
            {signUpIsOpen && <SignupModal handleSignUp={handleSignUpModal} />}
        </>
    );
};

const PopupMenu = ({
    isLogged,
    setIsLogged,
    darkMode,
    handleLoginModal,
    handleSignUpModal,
}) => {
    const PopUpMenuItems = () => {
        return isLogged ? (
            <>
                <span>
                    <BsFillPersonFill size={30} />
                    <Link to="/profile">My Profile</Link>
                </span>
                <span onClick={handleLoginModal}>
                    <RiLogoutBoxRLine size={30} />
                    <a>Logout</a>
                </span>
            </>
        ) : (
            <>
                <span onClick={handleSignUpModal}>
                    <BsPlusCircle size={30} />
                    <a>Sign Up</a>
                </span>
                <span onClick={handleLoginModal}>
                    <RiLoginBoxLine size={30} />
                    <Link to="/login">Login</Link>
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
