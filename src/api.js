import axios from "axios";

const apiUrl = "api/";

const getGames = () => {
    const games = axios.get(apiUrl);
    return games;
};

export { getGames };
