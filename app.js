const express = require("express")
const app = express()
const session = require("express-session")
const cors = require("cors")
const dotenv = require("dotenv")

const PASSWORD = "GobaluYaka"
dotenv.config()

app.use(express.json())
app.use(cors())
app.use(session({
    secret : process.env.SESSION_SECRET,
    cookie : { maxAge : 3000 },
    saveUninitialized : true
}))

app.get("/",(req,res)=> {
    res.json({
        t : "hi brothers"
    })
})

app.post("/",(req,res)=>{
    let r = req.body.password
    if (r === PASSWORD || req.session.id) {
        res.status(200).send()
        res.session.id = PASSWORD;
    } else {
        res.status(404).send()
    }
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

