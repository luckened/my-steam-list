const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const db = require("./db");
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    app.use(cors());
    next();
});

app.use(
    express.urlencoded({
        extended: true,
    })
);

// tag
app.use("/tag", require("./routes/tag"));

// game
app.use("/game", require("./routes/game"));

// client
app.use("/client", require("./routes/client"));

// rating
app.use("/rating", require("./routes/rating"));

// dev
app.use("/dev", require("./routes/dev"));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
