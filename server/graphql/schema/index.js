const {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require("graphql");
const ProductType = require("./TypeDefs/ProductType");
const OrderType = require("./TypeDefs/OrderType");
const { products, categories, orders } = require("../../db/chance");

const handleSortName = (_orders) => {
  return _orders.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};

const handleSortPrice = () => {
  const ordersWithTotal = orders.map((order) => {
    let total = 0;
    order.products.map(({ product: { price }, quantity }) => {
      total += price * quantity;
    });
    return { total, order };
  });
  const results = ordersWithTotal.sort((a, b) => {
    // DESC
    if (a.total > b.total) return -1;
    if (a.total < b.total) return 1;
    return 0;
  });
  return results.map((result) => result.order);
};

// Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllProducts: {
      type: new GraphQLList(ProductType),
      resolve() {
        return products;
      },
    },
    getProductById: {
      type: new GraphQLList(ProductType),
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args, request) {
        return products.filter((product) => product.id === args.id);
      },
    },
    getAllOrders: {
      type: new GraphQLList(OrderType),
      resolve() {
        return orders;
      },
    },
    sortByName: {
      type: new GraphQLList(OrderType),
      resolve() {
        const _orders= [...orders]
        return handleSortName(_orders);
      },
    },
    sortByPrice: {
      type: new GraphQLList(OrderType),
      resolve() {
        return handleSortPrice();
      },
    },
  },
});

// Mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //
    updateNameOfProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, args, request) {
        products.map((v) => {
          if (v.id === args.id) {
            v.name = args.name;
          }
          return v;
        });
        return args;
      },
    },
    updateCategoryOfProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
      },
      resolve(parentValue, args, request) {
        //...
        return args;
      },
    },
    updateDescriptionOfProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
      },
      resolve(parentValue, args, request) {
        //...
        return args;
      },
    },
    updatePriceOfProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
      },
      resolve(parentValue, args, request) {
        //...
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
