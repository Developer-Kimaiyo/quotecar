import mongoose from "mongoose";
//Connect to DB
mongoose.connection.on("open", function () {
  console.log("Connected to mongo server.");
});
mongoose.connection.on("error", function (err) {
  console.log("Could not connect to mongo server!");
  console.log(err);
});

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    })
    .catch((err) => console.log(err));

  mongoose.Promise = global.Promise;
};

export default connectDatabase;
