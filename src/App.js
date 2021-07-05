import logo from "./assets/logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";

function App() {
    return (
        <div className="App">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Header className="App-header"></Header>
            <Switch>
                <Route path="/" exact>
                    {/* Component */}
                </Route>
                <Route path="/home">{/* Component */}</Route>
                <Route path="/users">{/* Component */}</Route>
            </Switch>
            <footer />
        </div>
    );
}

export default App;
