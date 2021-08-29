import styles from "./index.module.css";
import GameTag from "../gameTag";
import { FaPlus } from "react-icons/fa";

const GameCard = ({ name, photo, tags }) => {
    const tagGroup = tags.map((tagName) => (
        <GameTag key={`tag-${tagName}`} name={tagName} />
    ));

    return (
        <span
            onClick={() => {
                alert(
                    `chama a query pra adicionar o jogo ${name} na lista do usuario`
                );
            }}
            className={styles.card}
        >
            <div className={styles.plusIcon}>
                <FaPlus size={40} color="white" />
            </div>
            <img className={styles.image} src={photo} alt={`${name}'s`} />
            <div className={styles.title}>{name}</div>
            <div className={`${styles.tagGroup} ${styles.scrollbar}`}>
                {tagGroup}
            </div>
        </span>
    );
};

const GameCardGroup = ({ className, cardList }) => {
    const cardGroup = cardList.map((cardProps) => (
        <GameCard key={`gamecard-${cardProps.name}`} {...cardProps} />
    ));

    return <div className={styles.cardGroup}>{cardGroup}</div>;
};

export { GameCardGroup, GameCard };
