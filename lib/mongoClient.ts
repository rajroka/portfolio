import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error('Please define MONGODB_URI in .env.local');
}

// Reuse client across hot reloads in development
declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

const client: MongoClient = global._mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== 'production') {
  global._mongoClient = client;
}

export default client;
