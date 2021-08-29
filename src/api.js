import axios from "axios";

const apiUrl = "http://localhost:3001/";

const getAllGames = async () => {
    const games = await axios.get(`${apiUrl}game`);

    return games.data.game;
};

export { getAllGames };
