const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Mutation = {
  AddUser: async (parent, args, ctx, info) => {
    const { name, userName, password } = args;
    let newUser=[];
    await prisma.user
      .findMany({
        where: {
          userName: userName,
        },
      })
      .then(async(data) => {
        if (data.length === 0){ // When the new User is created
          newUser = await prisma.user.create({
            data: {
              userName,
              password,
              name,
            },
          });
          const newCart = await prisma.cart.create({// new cart created for new User
            data: {
              userID:newUser.id
            },
          });
        }
        else newUser.message="Username exists!";
      })
      .catch((err) => console.log(err.message));
    return newUser;
  },
  AddToCart: async (parent, args, ctx, info) => {
    const { productID, userID } = args;
    let finalCart=[];
    const cartExist = await prisma.cart.findMany({
      where: {
        userID: +userID,
      }
    });
    
    if (cartExist.length === 1) {
           
      await prisma.productOnCart.create({
        data: {
          cartID: +cartExist[0].id,
          productID: +productID,
        },
      }).then(data=>console.log(`product added to cart:${cartExist[0].id}`))
      .catch(e=>console.log(e.message))
      
      finalCart = await prisma.cart.findMany({
        where: {
          userID: +userID,
        }
      });
    }else finalCart.message="Unsuccessful"
    return finalCart
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
