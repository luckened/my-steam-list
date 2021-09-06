import styles from "./index.module.css";
import ReactStars from "react-rating-stars-component";
import { ReactComponent as Thumbs } from "../../assets/thumbs.svg";
import { useHistory } from "react-router-dom";


const ListGameCard = ({ id, name, image, rating, approve }) => {
    const ratingChanged = (newRating) => {
        alert(`chama o post pra mudar a nota do game ${name} pra ${newRating}`);
    };
    const history = useHistory();


    return (
        <span className={styles.gameCardContainer}>
            <span className={styles.column}>
                <img
                    src={image}
                    className={styles.cardImage}
                    alt={`${name}'s`}
                    onClick={() => history.push(`/game/${id}`)}
                />
                <span className={styles.cardName}>{name}</span>
            </span>
            <span className={styles.column}>
                <ReactStars
                    count={5}
                    value={rating}
                    onChange={ratingChanged}
                    size={30}
                    isHalf={true}
                />
                <span className={styles.cardApproved}>approved?</span>
                <div className={styles.thumbsContainer}>
                    <Thumbs
                        className={`${styles.thumbsDown} ${
                            approve === -1 ? styles.dislike : ""
                        }`}
                        onClick={() =>
                            alert(
                                `chama o post pra dar dislike no jogo ${name}`
                            )
                        }
                    />
                    <Thumbs
                        className={`${styles.thumbsUp} ${
                            approve === 1 ? styles.like : ""
                        }`}
                        onClick={() =>
                            alert(`chama o post pra dar like no jogo ${name}`)
                        }
                    />
                </div>
            </span>
        </span>
    );
};

export { ListGameCard };
