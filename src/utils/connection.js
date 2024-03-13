import mongoose from "mongoose";

const connection = {};

export const connectToDatabase = async () => {
    console.log('Connection State:', mongoose.connection.readyState); 
  try {
    if (connection.isConnected) {
      console.log("Using existing connection.");
      return;
    }
    console.log("Connecting to database...");
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database.");
  } catch (err) {
    console.log(err);
    throw new Error("Error connecting to database");
  }
};
