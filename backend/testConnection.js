const { MongoClient } = require('mongodb');

const connectionString = 'mongodb+srv://hamzadurrani976:Hamza%40321@cluster0.cgyb5kl.mongodb.net/International%20Student%20Job%20Portal?retryWrites=true&w=majority';

async function testConnection() {
    const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Successfully connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas', err);
    } finally {
        await client.close();
    }
}

testConnection();
