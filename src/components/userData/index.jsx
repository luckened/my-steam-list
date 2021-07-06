import styles from "./index.module.css";

const UserData = ({ name, email, description, imgLink }) => {
    return (
        <>
            <div className={styles.userDataContainer}>
                <img
                    className={styles.profileImage}
                    src={imgLink}
                    alt="Profile"
                />
                <div className={styles.profileTextContainer}>
                    <p className={styles.profileText}>{name}</p>
                    <p className={styles.profileText}>{email}</p>
                    <p className={styles.profileText}>
                        Descrição: {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default UserData;
