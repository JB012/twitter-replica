import express from 'express'
import cors from 'cors'
import postsData from '../data/posts.json' with {type: "json"}
import usersData from '../data/users.json' with {type: "json"}

const app = express();
const portNumber = 8080;

app.use(cors())

app.get("/postsData", (req, res) => {
    res.json(postsData);
});

app.get("/usersData", (req, res) => {
    res.json(usersData);
});


app.listen(portNumber);
