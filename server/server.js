// `````````````````````Npm imports`````````````````````
    import express from "express";
    import mongoose from "mongoose";
// `````````````````````End npm imports`````````````````````
// `````````````````````Non npm imports`````````````````````
    import videoPostsData from "./videoPostsData.js";
    import Videos from "./dbModel.js";
// `````````````````````End Non npm imports`````````````````````
// `````````````````````App config`````````````````````
    const app = express();
    const port = process.env.PORT || 9000;
// `````````````````````End App config`````````````````````
// `````````````````````Middlewares`````````````````````
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
        res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
})
// `````````````````````End Middlewares`````````````````````
// `````````````````````DB config`````````````````````
    const connectionPassword = "MONGODB_CONNECTION_PASSWORD";
    const dbName = "MONGODB_CONNECTION_PASSWORD";
    const connectionUrl = `mongodb+srv://admin:${connectionPassword}@cluster0.7v4vq.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    mongoose.connect(connectionUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
// `````````````````````End DB config`````````````````````
// `````````````````````Api endpoints`````````````````````
    app.get("/", (req,res) => res.status(200).send("Hello World!"));
    app.get("/v1/posts", (req,res) => res.status(200).send(videoPostsData));
    app.get("/v2/posts", (req,res) => {
        Videos.find((err, data) => {
            if(err) res.status(500).send(err);
            else res.status(201).send(data);
        })
    });
    app.post("/v2/posts", (req,res) => {
        const postVideoData = req.body;
        Videos.create(postVideoData, (err, data) => {
            if(err) res.status(500).send(err);
            else res.status(201).send(data)
        });
        // res.status(200).send(videoPostsData)
    });
// `````````````````````End Api endpoints`````````````````````
// `````````````````````listen`````````````````````
    app.listen(port, () => console.log(`Listening localhost at port: ${port}....`))
// `````````````````````End     listen`````````````````````