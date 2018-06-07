const env = process.env.NODE_ENV || "development";
//process.env.NODE_ENV is "production" on heroku
//when the tests are run NODE.ENV is set to "test" in the npm test script
if (env === "development") {
  process.env.PORT = 8081;
  process.env.MONGODB_URI = "mongodb://localhost:27017/todos";
} else if (env === "test") {
  process.env.PORT = 8081;
  process.env.MONGODB_URI = "mongodb://localhost:27017/todosTEST";
} //if env === "production", heroku will set the PORT and MONGO_URI
