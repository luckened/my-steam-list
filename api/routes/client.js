const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) reject(err);
            resolve(hash);
        });
    });

    return hashedPassword;
};

const compare = async (param1, param2) => {
    return new Promise(function (resolve, reject) {
        bcrypt.compare(param1, param2, function (err, res) {
            err ? reject(err) : resolve(res);
        });
    });
};

router.get("/", async function (req, res, next) {
    try {
        const data = await db("client");
        res.json({ client: data });
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ error: err.message });
    }
});

router.get("/:id", async function (req, res, next) {
    try {
        const data = await db("client").where({ id: req.params.id });
        data.password = "";
        res.json({ client: data });
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ error: err.message });
    }
});

router.put("/", async function (req, res, next) {
    try {
        const body = req.body;
        if (!body.email) throw new Error("email not found");

        console.log(body)

        const data = await db("client").where({ email: body.email }).update({
            userName: body.userName,
            bio: body.bio,
            photo: body.photo,
        });

        // const data = await db("client")
        //     .insert({
        //         email: body.email,
        //         name: "",
        //         userName: body.userName,
        //         bio: body.bio,
        //         photo: body.photo,
        //     })
        //     .onConflict("email")
        //     .merge(["userName", "bio", "photo"]);

        res.json({ client: data });
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ error: err.message });
    }
});

router.post("/", async function (req, res, next) {
    try {
        const body = req.body;
        if (!body.password) throw new Error("password required");
        body.games = [];
        body.ratings = [];
        let data;
        body.password = await hashPassword(body.password);

        data = await db("client").insert(body);
        res.json({ client: data });
    } catch (err) {
        console.log(err.message);

        res.status(400).send({ error: err.message });
    }
});

router.post("/login", async (req, res, next) => {
    try {
        const body = req.body;
        if (!body.email || !body.password)
            throw new Error("missing email or password");

        let data = await db("client").where({ email: body.email });
        data = data[0];

        const success = await compare(body.password, data.password);
        if (success) {
            res.json({ client: data });
        } else throw new Error("Email or password does not match!");
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ error: err.message });
    }
});

module.exports = router;
