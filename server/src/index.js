const { join } = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");
const cors = require("cors");
const app = express();
app.use(cors());

const Query = require("./resolvers/query");
const Mutation = require("./resolvers/mutation");
const User = require("./resolvers/User");
const Address = require("./resolvers/Address");
const Cart = require("./resolvers/Cart");
const Payment = require("./resolvers/Payment");

const port = process.env.PORT;

const schema = loadSchemaSync(join(__dirname, "./schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: {
    Query,
    Mutation,
    User,
    Address,
    Cart,
    Payment,
  },
});
app.use(
  "/",
  graphqlHTTP({
    schema: schemaWithResolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("server is running on port ", port);
});
