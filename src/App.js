import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import GameCard from "./components/gameCard";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact>
                    {GameCard}
                </Route>
                <Route path="/home">{/* Component */}</Route>
                <Route path="/users">{/* Component */}</Route>
                <Route path="/mylist">{/* Component */}</Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
