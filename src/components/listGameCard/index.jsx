import styles from "./index.module.css";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

const ListGameCard = ({ name, image, rating, approve }) => {
    return (
        <span className={styles.gameCardContainer}>
            <img src={image} className={styles.cardImage} alt={`${name}'s`} />

            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <span className={styles.cardName}>{name}</span>
        </span>
    );
};

export { ListGameCard };
