import styles from "./index.module.css";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = ({ darkMode }) => (
    <footer className={`${styles.footer} ${darkMode ? styles.footerDark : ""}`}>
        <span>mySteamList © todos os direitos reservados.</span>
        <span>feito com ❤️ &nbsp;por d1sn3y</span>
        <span className={styles.icons}>
            <a
                className={styles.icons}
                href="https://www.instagram.com/luckened"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram size={30} color="white" />
            </a>
            <a
                className={styles.icons}
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
            >
                <FaYoutube size={30} color="white" />
            </a>
            <a
                className={styles.icons}
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
            >
                <FaTwitter size={30} color="white" />
            </a>
        </span>
    </footer>
);

export default Footer;
