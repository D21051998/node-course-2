//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);
//
// var user = {
// 	name: "andrew",
// 	age: 25
// };
//
// var { name } = user;
// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server.");
	}
	console.log("Connected to MongoDB server");
	var db = database.db("TodoApp");

	//deleteMany
	// db
	// 	.collection("Todos")
	// 	.deleteMany({
	// 		text: " About to get deleted"
	// 	})
	// 	.then(
	// 		result => {
	// 			console.log(`${result}`);
	// 		}
	// 	);

	//deleteOne
	// db
	// 	.collection("Todos")
	// 	.deleteOne({
	// 		text: "About to get deleted"
	// 	})
	// 	.then(result => {
	// 		console.log(`${result}`);
	// 	});
	//findOneAndDelete
	// db
	// 	.collection("Todos")
	// 	.findOneAndDelete({
	// 		completed: false
	// 	})
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	db
		.collection("Users")
		.deleteMany({
			name: "Deepanshu Jain"
		})
		.then(result => {
			console.log(result);
		});
	// db
	// 	.collection("Todos")
	// 	.find({
	// 		_id: new ObjectID("5a5f215c8994c738309083e3")
	// 	})
	// 	.count()
	// 	.then(
	// 		count => {
	// 			console.log("Todos");
	// 			console.log(`Todos count: ${count}`);
	// 		},
	// 		err => {
	// 			console.log("Unable to fetch todos", err);
	// 		}
	// 	);

	//database.close();
});
