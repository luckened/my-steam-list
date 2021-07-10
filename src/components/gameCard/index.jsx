import styles from "./index.module.css";
import GameTag from "../gameTag";

const GameCard = (props) => {
    const { name, image, tagList } = props;
    const tagGroup = tagList.map((name) => <GameTag name={name} />);
    return (
        <span className={styles.card}>
            <img className={styles.image} src={image} />
            <div className={styles.title}>{name}</div>
            <div className={`${styles.tagGroup} ${styles.scrollbar}`}>
                {tagGroup}
            </div>
        </span>
    );
};
const GameCardGroup = ({ cardList }) => {
    const cardGroup = cardList.map((cardProps) => <GameCard {...cardProps} />);

    return <div className={styles.cardGroup}>{cardGroup}</div>;
};

export { GameCardGroup, GameCard };
