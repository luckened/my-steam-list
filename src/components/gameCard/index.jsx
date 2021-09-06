import styles from "./index.module.css";
import GameTag from "../gameTag";
import { FaPlus } from "react-icons/fa";
import { insertGame } from "../../api";
import { toast } from "react-toastify";

const GameCard = ({ id, name, photo, tags }) => {
    const tagGroup = tags.map((tagName) => (
        <GameTag key={`tag-${tagName}`} name={tagName} />
    ));

    return (
        <span
            onClick={async () => {
                const userId = JSON.parse(
                    localStorage.getItem("loggedUser")
                )?.id;
                const inserted = await insertGame(userId, id);
                if (inserted) {
                    toast.success("Jogo adicionado com sucesso", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                } else {
                    toast.error(
                        "Erro!\nproblema ao adicionar jogo! Tente novamente"
                    );
                }
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
    const cardGroup = cardList
        .slice(0, 20)
        .map(
            (cardProps) =>
                cardProps.photo && (
                    <GameCard
                        key={`gamecard-${cardProps.name}`}
                        {...cardProps}
                    />
                )
        );

    return <div className={styles.cardGroup}>{cardGroup}</div>;
};

export { GameCardGroup, GameCard };
