import styles from "./index.module.css";
import GameTag from "../gameTag";

const GameCard = () => (
    <div className={styles.tagGroup}>
        <GameTag name="FPS" />
        <GameTag name="Exploracao" />
        <GameTag name="Um Jogador" />
        <GameTag name="Simulação" />
        <GameTag name="Competitivo" />
    </div>
);

export default GameCard;
