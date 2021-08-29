import { useEffect, useState } from "react";
import { getAllGames } from "../../api";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { GameCardGroup } from "../../components/gameCard";
import { a } from "./cardList";
import styles from "./index.module.css";

const Home = ({ darkMode, setDarkMode }) => {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const gameList = await getAllGames();
            setGamesList(gameList);
        };
        fetchData();
    }, []);

    return (
        <div className={styles.homeContainer}>
            <div
                className={`${styles.search} ${
                    darkMode ? styles.searchDark : ""
                }`}
            >
                <SearchIcon className={styles.searchIcon} />
                <input type="text" placeholder="Search for a game" />
            </div>
            {gamesList.length > 1 && (
                <GameCardGroup
                    className={styles.GameCardGroup}
                    cardList={gamesList}
                />
            )}
        </div>
    );
};

export default Home;
