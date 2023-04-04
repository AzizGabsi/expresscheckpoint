const express = require("express");
const app = express();
const PORT = 5000;

const offTimer = (req,res,next) =>{
if (new Date().getDate() > 0 && new Date().getDate() < 6 && (new Date().getHours() >= 9 && new Date().getHours() <= 17)) {
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/static/home.html")
    })

    app.get("/contact", (req, res) => {
        res.sendFile(__dirname + "/static/contact.html")
    })

    app.get("/services", (req, res) => {
        res.sendFile(__dirname + "/static/services.html")
    })

    next()

}
else {
    res.send("Website is Unavailable")
}
}

app.use(offTimer)
app.use(express.static(__dirname + "/static"))
app.listen(PORT, (err) => {
    err ? console.error(err) : console.log("Server is running on port", PORT)
})
