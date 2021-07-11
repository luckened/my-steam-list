import styles from "./index.module.css";
import { ListGameCard } from "../../components/listGameCard";

const MyList = ({ darkMode }) => {
    return (
        <div className={styles.myListContainer}>
            <ListGameCard
                name="CS:GO"
                image={
                    "https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=70&strip=info&resize=680,453"
                }
                rating={4}
                approve={0}
            />

            <ListGameCard
                name="Grand Chase"
                image={
                    "https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=70&strip=info&resize=680,453"
                }
                rating={5}
                approve={1}
            />

            <ListGameCard
                name="New World"
                image={
                    "https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=70&strip=info&resize=680,453"
                }
                rating={5}
                approve={-1}
            />

            <ListGameCard
                name="Rust"
                image={
                    "https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=70&strip=info&resize=680,453"
                }
                rating={1}
                approve={-1}
            />
        </div>
    );
};

export default MyList;
