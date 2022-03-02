const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");

const ProductObjectType = new GraphQLObjectType({
  name: "ProductObject",
  fields: () => ({
    price: { type: GraphQLInt },
  }),
});

const ProductsArrayType = new GraphQLObjectType({
  name: "ProductsArray",
  fields: () => ({
    product: { type: ProductObjectType },
    quantity: { type: GraphQLInt },
  }),
});

const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: {
      type: GraphQLString,
      // resolve: () => "Hello World",
    },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    zip: { type: GraphQLInt },
    country: { type: GraphQLString },
    products: { type: new GraphQLList(ProductsArrayType) },
    shipped: { type: GraphQLBoolean },
  }),
});

module.exports = OrderType;
