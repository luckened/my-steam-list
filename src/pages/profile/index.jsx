import UserData from "../../components/userData";
import styles from "./index.module.css";

const Profile = ({ userId, isMyProfile }) => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageName}>
                    {isMyProfile ? "Meu perfil" : "Perfil"}
                </h1>
                {isMyProfile && (
                    <button className={styles.editProfile} onClick={false}>
                        Editar
                    </button>
                )}
            </div>
            <div>
                <UserData
                    imgLink="https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=70&strip=info&resize=680,453"
                    name="savinho"
                    email="savinhord@gmail"
                    description="salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. salve salve yodinha. "
                />
            </div>
        </div>
    );
};

export default Profile;
