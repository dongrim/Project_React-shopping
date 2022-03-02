const express = require("express");
const app = express();
const PORT = process.env.PORT || 8011;
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`gql server is running on port ${PORT}`));
