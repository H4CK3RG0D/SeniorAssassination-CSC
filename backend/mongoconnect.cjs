const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://bryanchin:3duZATgz9UxJOIiC@whsseniorassassin.y3uvizr.mongodb.net/?retryWrites=true&w=majority";

let database; // Database object to be used throughout the application
async function connectToMongoDB() {
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true });
        const database = client.db('senior'); // Assign the database object
        return database;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

const getDatabase = () => {
    if (!database) {
        throw new Error('Database is not connected');
    }
    return database;
};

module.exports = { connectToMongoDB, getDatabase };
