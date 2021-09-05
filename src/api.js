import axios from "axios";

const apiUrl = "http://localhost:3001";

const getAllGames = async () => {
    const games = await axios.get(`${apiUrl}/game`);

    return games.data.game;
};

const insertUser = async (name, username, email, password) => {
	const body = { name, username, email, password };
	axios.post(`${apiUrl}/client`, body);
}

export { getAllGames, insertUser };
