import UserData from "../../components/userData";
import styles from "./index.module.css";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ darkMode }) => {
    const history = useHistory();
    const [isEditMode, setIsEditMode] = useState(false);
    const { id, userName, email, photo, bio } = JSON.parse(
        localStorage.getItem("loggedUser")
    );
    const isMyProfile =
        id.toString() === history.location.pathname.split("/")[2];

    return (
        <div className={styles.profileContainer}>
            <div className={styles.pageHeader}>
                {isMyProfile && (
                    <>
                        <span>Editar perfil</span>
                        <button onClick={() => setIsEditMode(!isEditMode)}>
                            <FaEdit color="white" size={25} />
                        </button>
                    </>
                )}
            </div>
            <div>
                <UserData
                    imgLink={photo || "http://placekitten.com/200/300"}
                    userName={userName}
                    email={email}
                    description={bio}
                    darkMode={darkMode}
                    isEditMode={isEditMode}
                />
            </div>
        </div>
    );
};

export default Profile;
