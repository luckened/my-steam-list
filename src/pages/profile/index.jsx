import UserData from "../../components/userData";
import styles from "./index.module.css";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const Profile = ({ userId, isMyProfile, darkMode }) => {
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <div className={styles.profileContainer}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageName}>
                    {isMyProfile ? "My profile" : "Profile"}
                </h1>
                {isMyProfile && (
                    <button onClick={() => setIsEditMode(!isEditMode)}>
                        <FaEdit color="white" size={25} />
                    </button>
                )}
            </div>
            <div>
                <UserData
                    imgLink="https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=70&strip=info&resize=680,453"
                    userName="savinho"
                    email="savinhord@gmail"
                    description="salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha.salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. "
                    darkMode={darkMode}
                    isEditMode={isEditMode}
                />
            </div>
        </div>
    );
};

export default Profile;
