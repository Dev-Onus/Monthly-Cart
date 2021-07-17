const { PrismaClient } = require("@prisma/client");
const { products } = require("./query");
const prisma = new PrismaClient();

const Payment = {
  user: async (parent, args, ctx, info) => {
    const user = await prisma.user.findMany({
      where: {
        id: parent.userID,
      },
    });
    return user;
  }
};

module.exports = Payment;
