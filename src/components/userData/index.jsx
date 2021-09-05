import { useState } from "react";
import { updateProfile } from "../../api";
import styles from "./index.module.css";
import { toast } from "react-toastify";

const UserData = ({
    defaultUserName,
    email,
    name,
    description,
    imgLink,
    darkMode,
    isEditMode,
}) => {
    const [bio, setBio] = useState(description);
    const [userName, setUserName] = useState(defaultUserName);
    const [photo, setPhoto] = useState(imgLink);

    return (
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
                        <input
                            id="upload-photo"
                            className={styles.uploadPhoto}
                            type="text"
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
                            defaultValue={email}
                            type="email"
                            placeholder="E-mail"
                            className={styles.profileEmail}
                            readOnly
                        />
                        <input
                            defaultValue={userName}
                            placeholder="Username"
                            className={styles.profileUsername}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                            defaultValue={imgLink}
                            placeholder="URL para foto de perfil"
                            className={styles.profileUsername}
                            onChange={(e) => setPhoto(e.target.value)}
                        ></input>
                        <textarea
                            rows={20}
                            defaultValue={description}
                            type="textarea"
                            placeholder="User bio"
                            onChange={(e) => setBio(e.target.value)}
                            className={styles.profileBio}
                        />
                    </>
                ) : (
                    <>
                        <p className={styles.profileUsername}>{name}</p>
                        <p className={styles.profileUsername}>{userName}</p>
                        <p className={styles.profileEmail}>{email}</p>
                        <p className={styles.profileBio}>bio: {description}</p>
                    </>
                )}
                {isEditMode && (
                    <button
                        onClick={() => {
                            updateProfile(email, userName, bio, photo)
                                ? toast.success("Perfil editado com sucesso!")
                                : toast.error("Erro ao editar perfil");
                        }}
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
};

export default UserData;
