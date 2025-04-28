import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/NexGendb';
const dbName = 'NexGendb';

export const mongoClient = new MongoClient(url, {
    connectTimeoutMS: 5000,
    socketTimeoutMS: 5000,
});

export const getDb = async () => {
    if (!mongoClient.connect()) {
        await mongoClient.connect();
    }
    return mongoClient.db(dbName);
};
