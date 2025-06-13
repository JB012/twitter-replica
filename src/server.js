import express from 'express'
import cors from 'cors'
import postData from '../data/posts.json' with {type: "json"}

const app = express();
const portNumber = 8010;
let posts;

app.use(cors())

console.log(posts);

app.listen(portNumber);

app.get("/postData", (req, res) => {
    res.json(postData)
});

console.log(`http://localhost:${portNumber}`);