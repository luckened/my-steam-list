import styles from "./index.module.css";
import GameTag from "../gameTag";
import { FaPlus } from "react-icons/fa";

const GameCard = (props) => {
    const { name, image, tagList } = props;
    const tagGroup = tagList.map((name) => <GameTag name={name} />);
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
            <img className={styles.image} src={image} alt={`${name}'s`} />
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
