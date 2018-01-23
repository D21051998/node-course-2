//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server.");
	}
	console.log("Connected to MongoDB server");
	var db = database.db("TodoApp");

	//findOneAndUpdate
	db
		.collection("Todos")
		.findOneAndUpdate(
			{
				_id: new ObjectID("5a5f2166d8f24c4fb0357771")
			},
			{
				$set: {
					completed: true
				}
			},
			{
				returnOriginal: false
			}
		)
		.then(result => {
			console.log(result);
		});

	//database.close();
});
