process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION ! 🧨 Shutting down !");
  console.log(err.name, err.message);
  process.exit(1);
});

const mongoose = require("mongoose");
const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection successful");
  });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLER REJECTION ! 🧨 Shutting down !");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
