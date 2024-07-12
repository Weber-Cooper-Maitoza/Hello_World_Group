const express = require("express");
const app = express();

const cors = require("cors")

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT;

const dbo = require("./db/conn");

app.use(cors(
    {
        origin:"http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        optionsSuccessStatus: 204,
        allowedHeaders: ["Content-Type", "Authorization"],
    }
));


app.use(express.json());

app.use(require("./routes/test"));


app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	dbo.connectToServer(function (err) {
		if (err) {
			console.log(err);
		}
	});
	console.log(`Server is running on port ${port}`);
});

