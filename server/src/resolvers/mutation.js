const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Mutation = {
  AddUser: async (parent, args, ctx, info) => {
    const { name, userName, password } = args;
    await prisma.user
      .findMany({
        where: {
          userName: userName,
        },
      })
      .then((data) => {
        if (data.length === 0){
          const newUser = await prisma.user.create({
            data: {
              userName,
              password,
              name,
            },
          });
        }
        else console.log("Username exists!");
      })
      .catch((err) => console.log(err.message));
    return newUser;
  },
  AddToCart: async (parent, args, ctx, info) => {
    const { productID, userID } = args;
    const cartExist = await prisma.cart.findMany({
      where: {
        userID: +userID,
      },
    });

    if (cartExist.length === 1) {
      const product = await prisma.product.findMany({
        where: {
          id: +productID,
        },
      });
      const cartItems = await prisma.cart.update({
        where: {
          userID: +userID,
        },
        data: {
          product: product,
        },
      });

      return cartItems;
    }
  },
  DeleteFromCart: async (parent, args, ctx, info) => {
    const { userID, productID } = args;

    const deleteProduct = await prisma.cart.findMany({
      where: {
        id: +productID,
      },
    });
    const deletedCartItems = await prisma.card.delete({
      where: {
        userId: +userID,
      },
    });
    return deletedCartItems;
  },
  MakePayment: async (parent, args, ctx, info) => {},
};

module.exports = Mutation;
