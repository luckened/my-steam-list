import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logonobackground.svg";
import styles from "./index.module.css";

const Header = ({ isLogged, darkMode, setDarkMode }) => (
    <header className={`${styles.header} ${darkMode ? styles.headerDark : ""}`}>
        <nav className={styles.nav}>
            <Link to="/">
                <img src={logo} className={styles.logo} alt="logo" />
            </Link>
            <Link to="/mylist" className={styles.myListButton}>
                <FaList className={styles.listIcon} color="white" size={25} />
                Minha Lista
            </Link>
            <Link to="/profile" className={styles.myListButton}>
                <FaList color="white" size={30} />
                Perfil
            </Link>
        </nav>
        <input
            onChange={() => setDarkMode(!darkMode)}
            className={styles.toggle}
            type="checkbox"
        />
    </header>
);

export default Header;
