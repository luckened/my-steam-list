import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import GameCard from "./components/gameCard";
import styles from "./index.module.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`${styles.app} ${darkMode ? styles.appDark : ""}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Switch>
                <Route path="/" exact>
                    {GameCard}
                </Route>
                <Route path="/users">{/* Component */}</Route>
                <Route path="/mylist">{/* Component */}</Route>
            </Switch>
            <Footer darkMode={darkMode} />
        </div>
    );
};

export default App;
