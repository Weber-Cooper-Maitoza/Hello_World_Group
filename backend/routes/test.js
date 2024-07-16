const express = require("express");
const routes = express.Router();

const dbo = require("../db/conn");


routes.route("/hello").get(async (req, res) => {
	try {
		console.log("hello")
		let db_connect = dbo.getDb().collection("movies");
	const result = await db_connect
            .aggregate([{ $sample: { size: 1 } }])
            .toArray();

		if(!result){
			res.status(900).json("Failed to connect")	
			return;
		}
		let x = result[0]
		res.json(x);
	} catch (err) {
		throw err;
	}
});

module.exports = routes;
