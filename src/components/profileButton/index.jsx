import { BsFillPersonFill, BsPlusCircle } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { RiLogoutBoxRLine, RiLoginBoxLine } from "react-icons/ri";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProfileButton = ({ isLogged, setIsLogged, darkMode, profileData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const { image: profileImage } = profileData;
    return (
        <>
            <button className={`${styles.profileButton}`} onClick={handleClick}>
                {isLogged ? (
                    <img src={profileImage}></img>
                ) : (
                    <IoPersonCircle size={63.28} />
                )}
                {isOpen && (
                    <PopupMenu
                        isLogged={isLogged}
                        setIsLogged={setIsLogged}
                        darkMode={darkMode}
                    />
                )}
            </button>
        </>
    );
};

const PopupMenu = ({ isLogged, setIsLogged, darkMode }) => {
    const PopUpMenuItems = () => {
        const handleLogin = () => {
            console.log("login");
            setIsLogged(!isLogged);
        };

        return isLogged ? (
            <>
                <span>
                    <BsFillPersonFill size={30} />
                    <Link to="/profile">My Profile</Link>
                </span>
                <span onClick={handleLogin}>
                    <RiLogoutBoxRLine size={30} />
                    <Link>Logout</Link>
                </span>
            </>
        ) : (
            <>
                <span>
                    <BsPlusCircle size={30} />
                    <Link>Sign Up</Link>
                </span>
                <span onClick={handleLogin}>
                    <RiLoginBoxLine size={30} />
                    <a>Login</a>
                </span>
            </>
        );
    };

    return (
        <div class={`${styles.popupMenu} ${darkMode && styles.popupMenuDark}`}>
            <PopUpMenuItems />
        </div>
    );
};

export default ProfileButton;
