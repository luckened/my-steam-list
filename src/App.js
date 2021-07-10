import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from "./pages/profile/index";
import Home from "./pages/home";
import styles from "./index.module.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`${styles.app} ${darkMode ? styles.appDark : ""}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Switch>
                <Route path="/" exact>
                    <Home darkMode={darkMode} setDarkMode={setDarkMode} />
                </Route>
                <Route path="/users">{/* Component */}</Route>
                <Route path="/home">{/* Component */}</Route>
                <Route path="/profile">
                    <Profile darkMode={darkMode} isMyProfile={true} />
                </Route>
                <Route path="/mylist">{/* Component */}</Route>
            </Switch>
            <Footer darkMode={darkMode} />
        </div>
    );
};

export default App;
