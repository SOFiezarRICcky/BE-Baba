const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express()

mongoose.connect("mongodb://putrazeus23:devildead45@cluster0-shard-00-00-fpbcg.mongodb.net:27017,cluster0-shard-00-01-fpbcg.mongodb.net:27017,cluster0-shard-00-02-fpbcg.mongodb.net:27017/kursus?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority")
    .then(db => console.log("DB Connected"))
    .catch(err => console.log(err))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

let corsOptions = {
    origin: "*",
    methods: ["*"],
    allowedHeaders: ["Content-Type", "babashop"]
}

app.use(cors(corsOptions))

require("./router/router")(app);

if (process.env.NODE_ENV === "production") {

}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running On PORT:${PORT}`));
