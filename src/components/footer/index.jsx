import styles from "./index.module.css";
import { FaInstagram, FaTwitch, FaTwitter, FaSteam } from "react-icons/fa";

const Footer = ({ darkMode }) => (
    <footer className={`${styles.footer} ${darkMode ? styles.footerDark : ""}`}>
        <span>mySteamList © todos os direitos reservados.</span>
        <span>feito com ❤️ &nbsp;por d1sn3y</span>
        <span className={styles.icons}>
            <a
                className={styles.icons}
                href="https://www.instagram.com/davi_emediato/"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram size={30} color="white" />
            </a>
            <a
                className={styles.icons}
                href="https://www.twitch.tv/plannnk"
                target="_blank"
                rel="noreferrer"
            >
                <FaTwitch size={30} color="white" />
            </a>
            <a
                className={styles.icons}
                href="https://twitter.com/Savio_Campolina"
                target="_blank"
                rel="noreferrer"
            >
                <FaTwitter size={30} color="white" />
            </a>
            <a
                className={styles.icons}
                href="https://steamcommunity.com/profiles/76561198807190365/"
                target="_blank"
                rel="noreferrer"
            >
                <FaSteam size={30} color="white" />
            </a>
        </span>
    </footer>
);

export default Footer;
