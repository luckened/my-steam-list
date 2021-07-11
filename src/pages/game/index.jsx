import styles from "./index.module.css";
import GameTag from "../../components/gameTag";
import ReactStars from "react-rating-stars-component";
import { ReactComponent as Thumbs } from "../../assets/thumbs.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";

const Game = ({ id }) => {
    const game = {
        title: "Counter-Strike: Global Offensive",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1623182945",
        description:
            "Counter-Strike: Global Offensive (CS: GO) expande a jogabilidade de ação baseada em equipas que foi pioneira quando lançada há 12         anos atrás. O CS: GO apresenta-se com novos mapas, personagens,         armas e ainda oferece versões atualizadas de conteúdo do CS        clássico (de_dust2, etc.).",
        info: "DATA DE LANÇAMENTO: 21 Ago, 2012 \nDEVELOPER: Valve, Hidden Path Entertainment EDITORA: Valve",
        tags: [
            "multiplayer",
            "first person",
            "jogo pra passar raiva",
            "sim",
            "SDFJKHSDF",
            "SDFJKHSDF",
            "coldzera na furia",
            "hltv confirmed",
            "fallen professor",
        ],
        score: 4.5,
        likes: 100,
        dislikes: 150,
    };

    const approve = 0;

    return (
        <div
            // style={{
            //     backgroundImage: `url(${game.image})`,
            //     backgroundRepeat: "no-repeat",

            // }}
            className={styles.gameContainer}
        >
            <img src={game.image} className={styles.backgroundImage} />
            <div className={styles.gameInfoContainer}>
                <h1 className={styles.title}>{game.title}</h1>
                <p>{game.description}</p>
                <p>{game.info}</p>
            </div>

            <div className={styles.imageContainer}>
                <img src={game.image} className={styles.image} />
                <div className={styles.tagsContainer}>
                    {game.tags.map((item) => (
                        <GameTag name={item} className={styles.gameTag} />
                    ))}
                </div>
            </div>

            <div className={styles.ratingContainer}>
                <h2>mean score</h2>
                <span className={styles.starsContainer}>
                    {game.score}
                    <ReactStars
                        count={5}
                        value={game.score}
                        onChange={() => {}}
                        size={30}
                        isHalf={true}
                        edit={false}
                    />
                </span>
                <h2>likes and deslikes</h2>
                <div className={styles.thumbsContainer}>
                    {game.likes}
                    <Thumbs
                        className={styles.thumbsUp}
                        onClick={() =>
                            alert(
                                `chama o post pra dar like no jogo ${game.title}`
                            )
                        }
                    />
                    {game.dislikes}
                    <Thumbs
                        className={styles.thumbsDown}
                        onClick={() =>
                            alert(
                                `chama o post pra dar dislike no jogo ${game.title}`
                            )
                        }
                    />
                </div>
                <button
                    className={styles.listAddButton}
                    onClick={() =>
                        alert(`adiciona o jogo ${game.title} na lista`)
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
