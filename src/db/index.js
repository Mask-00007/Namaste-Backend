import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    //* We can store await instance in a variable... provided by mongoose
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED: ", error);

    // * process is a global object that provides information and control over the current running Node.js application. You don’t need to import it — it’s available everywhere by default.
    process.exit(1); //  ends the process with an exit code (0 = success, non‑zero = error).
    // you’re telling the program to terminate immediately with an exit code of 1.
  }
};

export default connectDB;
