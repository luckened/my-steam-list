import axios from "axios";

const apiUrl = "http://localhost:3001/";

const getAllGames = async () => {
    const games = await axios.get(`${apiUrl}game`);

    return games.data.game;
};

const insertUser = async (name, userName, email, password) => {
    const body = { name, userName, email, password };
    let res;

    try {
        res = await axios.post(`${apiUrl}client`, body);
    } catch (e) {
        console.error(e);
    }

    return res?.status === 200;
};

const login = async (email, password) => {
    const body = { email, password };
    let res;
    try {
        res = await axios.post(`${apiUrl}client/login`, body);
    } catch (e) {
        console.error(e);
    }
    
    localStorage.setItem("loggedUser", JSON.stringify(res?.data?.client));

	return res?.status === 200;
};


export { getAllGames, insertUser, login };
