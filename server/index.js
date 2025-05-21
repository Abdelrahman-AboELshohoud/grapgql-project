const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
