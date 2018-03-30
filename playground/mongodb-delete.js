const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Jenil Jain'}).then((result) => {
    //     // console.log(result);
    // }, (err) => {
    //     console.log('Could not delete user');
    // });

    // deleteOne
    // db.collection('Users').deleteOne({name: 'Jenil Jain'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Could not delete user');
    // });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({name: 'Jenil Jain'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Could not find or delete user');
    });

    db.close();
});