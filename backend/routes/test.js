const express = require("express");
const routes = express.Router();

const dbo = require("../db/conn");


routes.route("/hello").get(async (req, res) => {
	try {
		let db_connect = dbo.getDb().collection("movies");
		const result = await db_connect.findOne();;
		if(!result){
			res.status(900).json("Failed to connect")	
			return;
		}
		console.log(result)
		res.json(result);
	} catch (err) {
		throw err;
	}
});

module.exports = routes;
