import styles from "./index.module.css";
import { FaEdit } from "react-icons/fa";

const UserData = ({
    userName,
    email,
    description,
    imgLink,
    darkMode,
    isEditMode,
}) => (
    <div
        className={`${styles.userDataContainer} ${
            darkMode ? styles.userDataContainerDark : ""
        }`}
    >
        <div>
            <img
                className={styles.profileImage}
                src={imgLink}
                alt={`${userName}'s profile`}
            />
            {isEditMode && (
                <>
                    <label
                        for="upload-photo"
                        className={styles.profileEditButton}
                    >
                        <FaEdit color="white" size={25} />
                        edit profile picture
                    </label>
                    <input
                        id="upload-photo"
                        accept="image/png, image/jpeg"
                        className={styles.uploadPhoto}
                        type="file"
                    ></input>
                </>
            )}
        </div>
        <div
            className={`${styles.profileTextContainer} ${
                darkMode ? styles.profileTextContainerDark : ""
            }`}
        >
            {isEditMode ? (
                <>
                    <input
                        defaultValue={userName}
                        placeholder="Username"
                        className={styles.profileUsername}
                    />
                    <input
                        defaultValue={email}
                        type="email"
                        placeholder="E-mail"
                        className={styles.profileEmail}
                    />
                    <textarea
                        rows={20}
                        defaultValue={`bio: ${description}`}
                        type="textarea"
                        placeholder="User bio"
                        className={styles.profileBio}
                    />
                </>
            ) : (
                <>
                    <p className={styles.profileUsername}>{userName}</p>
                    <p className={styles.profileEmail}>{email}</p>
                    <p className={styles.profileBio}>bio: {description}</p>
                </>
            )}
            {isEditMode && (
                <button
                    onClick={() => alert("updateprofile post")}
                    className={`${styles.updateProfileButton} ${
                        darkMode ? styles.updateProfileButtonDark : ""
                    }`}
                >
                    update profile
                </button>
            )}
        </div>
    </div>
);

export default UserData;
