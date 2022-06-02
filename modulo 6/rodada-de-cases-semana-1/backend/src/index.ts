import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { serviceRouter } from "./routes/serviceRouter";
import { userRouter } from "./routes/userRouter";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/service", serviceRouter);
app.use("/user", userRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
