// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     'text': 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err)
    //         return console.log('Unable to insert Todo', err);
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    db.collection('Users').insertOne({
        name: 'Jenil Jain',
        age: 24,
        location: 'Bangalore, India'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User. ', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});

// Destructuring objects
// var user = {name: 'gourav', age: 23};
// var {name} = user;
// console.log(name);