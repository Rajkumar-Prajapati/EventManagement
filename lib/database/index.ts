import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface CachedMongoose {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// Avoid using `var` by directly checking for global.mongoose
let cached: CachedMongoose = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async (): Promise<Connection> => {
  // Return cached connection if it exists
  if (cached.conn) return cached.conn;

  // Throw an error if MONGODB_URI is missing
  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  // If no connection, create a new promise for connection
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'EventManagement',
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  
  // Safely store the connection globally using `let`
  global.mongoose = cached;

  return cached.conn;
};
