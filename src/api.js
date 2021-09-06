import axios from "axios";

const apiUrl = "https://my-steam-list.herokuapp.com/";

const getAllGames = async () => {
    const games = await axios.get(`${apiUrl}game`);

    return games.data.game;
};

const getGameById = async (id) => {
    const games = await axios.get(`${apiUrl}game/${id}`);

    return games.data.game[0];
};

const getUserGames = async (id) => {
    const user = await axios.get(`${apiUrl}client/${id}`);
    const games = user.data.client[0].games;
    
    let allGames = await getAllGames();
    allGames = allGames.filter((game) => games.includes(game.id));

    return allGames;
};


const insertGame = async (userId, gameId) => {
    const body = { userId, gameId };
    let res;

    try {
        res = await axios.put(`${apiUrl}game`, body);
    } catch (e) {
        console.error(e);
    }
    return res?.status === 200;
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
    if (res?.data?.client)
        localStorage.setItem("loggedUser", JSON.stringify(res?.data?.client));

    return res?.status === 200;
};

const getUserData = async (id) => {
    let data;
    try {
        data = await axios.get(`${apiUrl}client/${id}`);
    } catch (e) {
        console.error(e);
    }

    return data;
};

const updateProfile = async (email, userName, bio, photo) => {
    const body = { email, userName, bio, photo };
    let res;
    try {
        res = await axios.put(`${apiUrl}client/`, body);
    } catch (e) {
        console.error(e);
    }
    if (res?.status === 200) {
        const currentUser = JSON.parse(localStorage.getItem("loggedUser"));
        localStorage.setItem("loggedUser", JSON.stringify({ ...currentUser, ...body }));
    }
    return res?.status === 200;
};

export { getAllGames, insertUser, login, getUserData, updateProfile, insertGame, getUserGames, getGameById };
