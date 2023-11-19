import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import BeritaRoute from "./routes/BeritaRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
import ProgramRoute from "./routes/ProgramRoute.js";
import RegProgramRoute from "./routes/RegProgramRoute.js";
import db from "./config/Database.js";
dotenv.config();

const app = express();

const store = new sessionStorage({
  db: db,
})(async () => {
  await db.sync();
})();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(BeritaRoute);
app.use(AdminRoute);
app.use(ProgramRoute);
app.use(RegProgramRoute);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running");
});
