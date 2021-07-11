import styles from "./index.module.css";

const GameTag = ({ name, className }) => (
    <span className={`${styles.tag} ${className || ""}`}>{name}</span>
);

export default GameTag;
