import styles from "./index.module.css";
import { ListGameCard } from "../../components/listGameCard";

const MyList = ({ darkMode }) => {
    return (
        <div className={styles.myListContainer}>
            <ListGameCard
                name={"salve"}
                image={
                    "https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=70&strip=info&resize=680,453"
                }
                rating={1}
                approve="unset"
            />
            <ListGameCard
                name={"salve"}
                image={
                    "https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=70&strip=info&resize=680,453"
                }
                rating={5}
                approve="approved"
            />
        </div>
    );
};

export default MyList;
