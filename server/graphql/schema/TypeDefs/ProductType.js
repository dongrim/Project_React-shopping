const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
  }),
});

module.exports = ProductType;
