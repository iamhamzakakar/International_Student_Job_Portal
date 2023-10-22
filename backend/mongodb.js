const { MongoClient } = require('mongodb');

// Ideally, this should come from environment variables or a secure config
const connectionString = process.env.MONGODB_CONNECTION_STRING;

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let database;

async function connect() {
    if (!client.isConnected()) {
        await client.connect();
        console.log('Connected to MongoDB Atlas using MongoDB Node.js driver');
        database = client.db(process.env.MONGODB_DB_NAME); // Name of the database can also come from environment variables
    }
    return database;
}

async function close() {
    if (client.isConnected()) {
        await client.close();
        console.log('Closed connection to MongoDB Atlas');
    }
}

module.exports = {
    connect,
    close
};
