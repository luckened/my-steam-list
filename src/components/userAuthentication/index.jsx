import { useState } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./index.module.css";

const handleOutsideClick = (e, openModal) => {
    if (e.target.id === "signup-modal" || e.target.id === "login-modal") {
        e.preventDefault();
        e.stopPropagation();
        openModal(false);
    }
};

const SignupModal = ({ openSignUp, handleSignUp }) => {
    const [name, setName] = useState("");
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div
            onClick={(e) => handleOutsideClick(e, openSignUp)}
            id="signup-modal"
            className={styles.modal}
        >
            <div className={styles.modalContent}>
                <div className={styles.modalHeaderContainer}>
                    <h1>Sign Up</h1>
                    <IoClose
                        onClick={() => handleSignUp({ close: true })}
                        className={styles.modalHeaderContainerIcon}
                    />
                </div>
                <div className={styles.modalForm}>
                    <input
                        className={styles.modalInput}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className={styles.modalInput}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className={styles.modalInput}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className={styles.modalInput}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={() => handleSignUp({ name, userName, email, password })} className={styles.modalButton}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

const LoginModal = ({ openLogin, handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div
            onClick={(e) => handleOutsideClick(e, openLogin)}
            id="login-modal"
            className={styles.modal}
        >
            <div className={styles.modalContent}>
                <div className={styles.modalHeaderContainer}>
                    <h1>Login</h1>
                    <IoClose
                        onClick={() => openLogin(false)}
                        className={styles.modalHeaderContainerIcon}
                    />
                </div>
                <div className={styles.modalForm}>
                    <input
                        type="text"
                        className={styles.modalInput}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className={styles.modalInput}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    onClick={() => handleLogin(email, password)}
                    className={styles.modalButton}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export { LoginModal, SignupModal };
