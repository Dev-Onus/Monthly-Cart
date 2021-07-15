const { PrismaClient } = require("@prisma/client");
const bcrypt=require("bcrypt")
const prisma = new PrismaClient();

const Query = {
  users: async (parent, args, ctx, info) => {
    const user = args.id
      ? await prisma.user.findMany({
          where: {
            id: +args.id,
          },
        })
      : await prisma.user.findMany();
    return user;
  },
  products: async (parent, args, ctx, info) => {
    const product = args.id
      ? await prisma.product.findMany({
          where: {
            id: +args.id,
          },
        })
      : await prisma.product.findMany();
    return product;
  },
  carts: async (parent, args, ctx, info) => {
    const cart = args.id
      ? await prisma.cart.findMany({
          where: {
            id: +args.id,
          },
        })
      : await prisma.cart.findMany();
    return cart;
  },
  payments: async (parent, args, ctx, info) => {
    const payment = args.id
      ? await prisma.payment.findMany({
          where: {
            id: +args.id,
          },
        })
      : await prisma.payment.findMany();
    return payment;
  },
  login: async (parent, args, ctx, info) => {
    const { userName, password } = args;
    let reply = {
      message: "",
    };
    await prisma.user
      .findMany({
        where: {
          userName,
        },
      })
      .then((data) => {
        if (data.length === 1) {
          const loginCheck=bcrypt.compareSync(password,data[0].password)
          if (loginCheck) reply.message = "Login Successful";
          else reply.message = `Hi ${data[0].name}, You entered the wrong password`;
        } else reply.message = "User Not Found";
      });
      return reply
  }
};

module.exports = Query;
