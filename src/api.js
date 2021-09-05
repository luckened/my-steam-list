import axios from "axios";

const apiUrl = "http://localhost:3001/";

const getAllGames = async () => {
    const games = await axios.get(`${apiUrl}game`);
    console.log(games)
    return games.data.game;
};

const insertUser = async (name, userName, email, password) => {
    const body = { name, userName, email, password };
    let res;
    
    try {
       res = await axios.post(`${apiUrl}client`, body);
    } catch(e) {
      console.error(e);
    }

    return res?.status === 200;
};

export { getAllGames, insertUser };
