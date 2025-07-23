import mongoose from "mongoose";
let latestDb;
let testDb;
const connectDB = async () => {
  try {
    latestDb = mongoose.createConnection(process.env.LATEST_DB_URI);
    latestDb = await latestDb.asPromise();
    console.log(latestDb.name, "DB is connected successfully");

    testDb = mongoose.createConnection(process.env.TEST_URI);
    testDb = await testDb.asPromise();
    console.log(testDb.name, "DB is connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export { connectDB, testDb, latestDb };
