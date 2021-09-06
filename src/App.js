import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from "./pages/profile/index";
import Home from "./pages/home";
import MyList from "./pages/myList";
import Game from "./pages/game";
import styles from "./index.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const isLogged = JSON.parse(localStorage.getItem("loggedUser"));

    return (
        <>
            <ToastContainer />
            <div className={`${styles.app} ${darkMode ? styles.appDark : ""}`}>
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    isLogged={isLogged}
                />
                <Switch>
                    <Route path="/" exact>
                        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
                    </Route>
                    <Route path="/users">{/* Component */}</Route>
                    <Route path="/home">{/* Component */}</Route>
                    <Route path="/profile/:id">
                        <Profile darkMode={darkMode} />
                    </Route>
                    <Route path="/mylist">
                        <MyList />
                    </Route>

                    <Route path="/game/:id">
                        <Game />
                    </Route>
                </Switch>
                <Footer darkMode={darkMode} />
            </div>
        </>
    );
};

export default App;
