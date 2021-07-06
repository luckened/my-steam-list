import { Link } from "react-router-dom";
import logo from "../../assets/logonobackground.svg";
import styles from "./index.module.css";
import { FaList, FaRegMoon, FaRegGrinStars } from "react-icons/fa";

const Header = ({ isLogged }) => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link to="/home"><img src={logo} className={styles.logo} alt="logo" /></Link>
            <Link to="/mylist" className={styles.myListButton}>
                <FaList color="white" size={30} />
                Minha Lista
            </Link>
        </nav>
        <span>
            <FaRegMoon color="white" size={30} className={styles.darkModeButton} />
            <FaRegGrinStars color="white" size={30} />
        </span>
    </header>
);

export default Header;
