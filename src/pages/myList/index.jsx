import styles from "./index.module.css";
import { ListGameCard } from "../../components/listGameCard";
import { useEffect, useState } from "react";
import { getUserGames } from "../../api";

const MyList = ({ isLogged, darkMode }) => {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = JSON.parse(localStorage.getItem("loggedUser"));
            const gameList = await getUserGames(user.id);
            console.log(gameList);
            setGamesList(gameList);
        };
        fetchData();
    }, []);

    return (
        <div className={styles.myListContainer}>
            {gamesList.map((game) => (
                <ListGameCard
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    image={
                        game.photo}
                    rating={4}
                    approve={0}
                />
            ))}
        </div>
    );
};

export default MyList;