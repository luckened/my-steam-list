import UserData from "../../components/userData";
import styles from "./index.module.css";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUserData } from "../../api";

const Profile = ({ darkMode }) => {
    const history = useHistory();
    const [isEditMode, setIsEditMode] = useState(false);
    const userId = history.location.pathname.split("/")[2];
    const [{ photo, name, userName, email, bio }, setUserData] = useState({});
    const loggedUserId = JSON.parse(localStorage.getItem("loggedUser"))?.id
    const isMyProfile = loggedUserId.toString() === userId;

    useEffect(() => {
        async function fetchData() {
            const response = await getUserData(userId);
            setUserData(response.data.client[0]);

        }
        fetchData();
    }, [userId]);

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
                    defaultUserName={userName}
                    name={name}
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
