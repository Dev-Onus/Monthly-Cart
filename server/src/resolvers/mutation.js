const { PrismaClient } = require("@prisma/client");
const brcrypt = require("bcrypt");
const prisma = new PrismaClient();

const Mutation = {
  AddUser: async (parent, args, ctx, info) => {
    const { name, userName, password } = args;
    const salt = await brcrypt.genSalt(10);
    const securePassword = await brcrypt.hash(password, salt);
    let newUser = [];
    await prisma.user
      .findMany({
        where: {
          userName: userName,
        },
      })
      .then(async (data) => {
        if (data.length === 0) {
          // When the new User is created
          newUser = await prisma.user.create({
            data: {
              userName,
              password: securePassword,
              name,
            },
          });
          const newCart = await prisma.cart.create({
            // new cart created for new User
            data: {
              userID: newUser.id,
            },
          });
        } else newUser.message = "Username exists!";
      })
      .catch((err) => console.log(err.message));
    return newUser;
  },
  EditProfile: async (parent, args, ctx, info) => {
    const {
      userName,
      doorNo,
      street,
      area,
      landmark,
      state,
      pincode,
      mobileNo,
    } = args;
    const reply = {
      message: "",
    };
    await prisma.user
      .findMany({
        where: {
          userName,
        },
      })
      .then(async (data) => {
        if (data.length === 1) {
          //User found category
          if (mobileNo !== null) {
            await prisma.user.update({
              where: {
                userName: data[0].userName,
              },
            });
          }

          await prisma.address
            .create({
              data: {
                doorNo,
                street,
                area,
                landmark,
                state,
                pincode,
                userID: data[0].id,
              },
            })
            .then((data) => (reply.message = "Profile updated successfully"))
            .catch((error) => (reply.message = error.message));
        } else
          reply.message = "User not found. Please create an account to proceed";
      });
    return reply;
  },
  AddToCart: async (parent, args, ctx, info) => {
    const { productID, userID } = args;
    let reply = {
      message: "",
    };
    const cartExist = await prisma.cart.findMany({
      where: {
        userID: +userID,
      },
    });
    if (cartExist.length === 1) {
      await prisma.productOnCart
        .create({
          data: {
            cartID: +cartExist[0].id,
            productID: +productID,
          },
        })
        .then((data) => (reply.message = "Success"))
        .catch((error) => (reply.message = error.message));
    } else reply.message = "Unable to find cart";
    return reply;
  },
  DeleteFromCart: async (parent, args, ctx, info) => {
    const { userID, productID } = args;
    let reply = {
      message: "",
    };
    const cartExist = await prisma.cart.findMany({
      //Find the Cart
      where: {
        userID: +userID,
      },
    });

    if (cartExist.length === 1) {
      //Cart found successfully
      if (productID === null) {
        //Empty the cart when payment done
        await prisma.productOnCart
          .deleteMany({
            where: {
              cartID: +cartExist[0].id,
            },
          })
          .then((data) => (reply.message = "Cart emptied!"))
          .catch((e) => (reply.message = e.message));
      } else {
        await prisma.productOnCart
          .findMany({
            //Finding product in Cart
            where: {
              productID: +productID,
              cartID: +cartExist[0].id,
            },
          })
          .then(async (data) => {
            if (data.length === 1) {
              //Product found in Cart
              await prisma.productOnCart
                .deleteMany({
                  where: {
                    cartID: +cartExist[0].id,
                    productID: +productID,
                  },
                })
                .then((data) => (reply.message = "Item removed from Cart"))
                .catch((error) => (reply.message = error.message));
            } else reply.message = "No product found in cart";
          })
          .catch((e) => (reply.message = e.message));
      }
    } else reply.message = "Unable to find cart";
    return reply;
  },
  MakePayment: async (parent, args, ctx, info) => {
    const { userID, payMode, amount, address } = args;
    let Payment = {};
    await prisma.cart
      .findMany({
        where: {
          userID: +userID,
        },
      })
      .then(async (data) => {
        if (data.length === 1) {
          const productsArray = await prisma.productOnCart.findMany({
            where: {
              cartID: data[0].id,
            },
            select: {
              product: true,
            },
          });
          if (productsArray.length !== 0) {
            const cartProducts = productsArray.map((item) => {
              return {
                id: item.product.id,
                name: item.product.name,
                price: item.product.price,
                description: item.product.description,
              };
            });
            Payment = await prisma.payment.create({
              data: {
                id: Math.random().toString(30).slice(-8),
                userID: +userID,
                payMode,
                amount: +amount,
                address,
                products: cartProducts.map(
                  (product) => `name:${product.name},price:${product.price}`
                ),
              },
            });
          }
        }
      });
    console.log(Payment);
    return Payment;
  },
};

module.exports = Mutation;