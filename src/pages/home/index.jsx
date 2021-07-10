import { GameCardGroup } from "../../components/gameCard";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import cardList from "./cardList";
import styles from "./index.module.css";

// A functional component named home that renders the GameCardGroup component.
const Home = ({ darkMode, setDarkMode }) => (
    <div className={styles.homeContainer}>
        {/* Div element with className styles.search that contains an input and an image  */}
        <div
            className={`${styles.search} ${darkMode ? styles.searchDark : ""}`}
        >
            <SearchIcon className={styles.searchIcon} />
            <input type="text" placeholder="Search for a game" />
        </div>
        <GameCardGroup className={styles.GameCardGroup} cardList={cardList} />
    </div>
);

export default Home;
