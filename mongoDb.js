const MongoClient = require('mongodb').MongoClient;
// const { insertDocuments } = require('./interns');
const { insertNewDocuments } = require('./interns');
const { firstDocument } = require('./findinterns');

// connection url
const url = 'mongodb://localhost:27017';

// database name
const dbName = 'liimmaa';

// connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    console.log(`Database created by ${dbName}`);

    const db = client.db(dbName);

    // insertDocuments(db, () => {
    //     client.close();
    // });
    insertNewDocuments(db, () => {
        client.close();
    });
    firstDocument(db, () => {
        client.close();
    });
});
