import styles from "./index.module.css";
import GameTag from "../../components/gameTag";
import ReactStars from "react-rating-stars-component";
import { ReactComponent as Thumbs } from "../../assets/thumbs.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameById } from "../../api";

const Game = () => {
    const history = useHistory();
    const [game, setGame] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const gameId = history.location.pathname.split("/")[2];
            const gameList = await getGameById(gameId);

            setGame(gameList);
        };
        fetchData();
    }, [history.location.pathname]);

    return (
        <div
            className={styles.gameContainer}
        >
            <img
                alt={`game ${game.name}`}
                src={game.photo}
                className={styles.backgroundImage}
            />
            <div className={styles.gameInfoContainer}>
                <h1 className={styles.title}>{game.name}</h1>
                {/* <p>{game.description}</p> */}
                <p>{game.developer}</p>
                <p>{game.publisher}</p>
            </div>

            <div className={styles.imageContainer}>
                <img
                    alt={`game ${game.name}`}
                    src={game.photo}
                    className={styles.image}
                />
                <div className={styles.tagsContainer}>
                    {game?.tags?.map((item) => (
                        <GameTag name={item} key={`key-${item}`} className={styles.gameTag} />
                    ))}
                </div>
            </div>

            <div className={styles.ratingContainer}>
                <h2>mean score</h2>
                <span className={styles.starsContainer}>
                    {game.meanRate}
                    <ReactStars
                        count={5}
                        value={game.meanRate}
                        onChange={() => {}}
                        size={30}
                        isHalf={true}
                        edit={false}
                    />
                </span>
                <h2>likes and deslikes</h2>
                <div className={styles.thumbsContainer}>
                    {game.likesNumber}
                    <Thumbs
                        className={styles.thumbsUp}
                        onClick={() =>
                            alert(
                                `chama o post pra dar like no jogo ${game.name}`
                            )
                        }
                    />
                    {game.dislikesNumber}
                    <Thumbs
                        className={styles.thumbsDown}
                        onClick={() =>
                            alert(
                                `chama o post pra dar dislike no jogo ${game.name}`
                            )
                        }
                    />
                </div>
                <button
                    className={styles.listAddButton}
                    onClick={() =>
                        alert(`adiciona o jogo ${game.name} na lista`)
                    }
                >
                    <Heart className={styles.heart} />
                    add to list
                </button>
            </div>
        </div>
    );
};

export default Game;
