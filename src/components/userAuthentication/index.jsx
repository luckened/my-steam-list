import { IoClose } from "react-icons/io5";
import styles from "./index.module.css";

const handleOutsideClick = (e, handleModal) => {
    if (e.target.id === "signup-modal" || e.target.id === "login-modal") {
        e.preventDefault();
        e.stopPropagation();
        handleModal({ close: true });
    }
};

const SignupModal = ({ handleSignUp }) => {
    return (
        <div
            onClick={(e) => handleOutsideClick(e, handleSignUp)}
            id="signup-modal"
            className={styles.modal}
        >
            <div className={styles.modalContent}>
                <div className={styles.modalHeaderContainer}>
                    <h1>sign up</h1>
                    <IoClose
                        onClick={() => handleSignUp({ close: true })}
                        className={styles.modalHeaderContainerIcon}
                    />
                </div>
                <div className={styles.modalForm}>
                    <input
                        type="text"
                        className={styles.modalInput}
                        placeholder="name"
                    />
                    <input
                        type="text"
                        className={styles.modalInput}
                        placeholder="username"
                    />
                    <input
                        type="text"
                        className={styles.modalInput}
                        placeholder="email"
                    />
                    <input
                        type="password"
                        className={styles.modalInput}
                        placeholder="password"
                    />
                </div>
                <button onClick={handleSignUp} className={styles.modalButton}>
                    sign up
                </button>
            </div>
        </div>
    );
};

const LoginModal = ({ handleLogin }) => {
    return (
        <div
            onClick={(e) => handleOutsideClick(e, handleLogin)}
            id="login-modal"
            className={styles.modal}
        >
            <div className={styles.modalContent}>
                <div className={styles.modalHeaderContainer}>
                    <h1>login</h1>
                    <IoClose
                        onClick={() => handleLogin({ close: true })}
                        className={styles.modalHeaderContainerIcon}
                    />
                </div>
                <div className={styles.modalForm}>
                    <input
                        type="text"
                        className={styles.modalInput}
                        placeholder="email"
                    />
                    <input
                        type="password"
                        className={styles.modalInput}
                        placeholder="password"
                    />
                </div>
                <button onClick={handleLogin} className={styles.modalButton}>
                    login
                </button>
            </div>
        </div>
    );
};

export { LoginModal, SignupModal };
