import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logonobackground.svg";
import styles from "./index.module.css";
import ProfileButton from "../profileButton";
import profileImage from "../../assets/profileplaceholder.png";

const profileData = {
    image: profileImage,
};

const Header = ({ isLogged, setIsLogged, darkMode, setDarkMode }) => (
    <header className={`${styles.header} ${darkMode ? styles.headerDark : ""}`}>
        <nav className={styles.nav}>
            <Link to="/">
                <img src={logo} className={styles.logo} alt="logo" />
            </Link>
            <Link to="/mylist" className={styles.myListButton}>
                <FaList className={styles.listIcon} color="white" size={25} />
                Minha Lista
            </Link>
        </nav>
        <input
            onChange={() => setDarkMode(!darkMode)}
            className={styles.toggle}
            type="checkbox"
        />
        <ProfileButton
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            darkMode={darkMode}
            profileData={profileData}
        />
    </header>
);

export default Header;
