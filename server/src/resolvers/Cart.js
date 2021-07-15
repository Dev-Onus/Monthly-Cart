const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Cart={
    products:async(parent,args,ctx,info)=>{
        const products=await prisma.productOnCart.findMany({
            where:{
                cartID:parent.id
            },
            select:{
                product:true
            }
        })
        const cartProducts=products.map(item=>{return{
            id:item.product.id,
            name:item.product.name,
            price:item.product.price,
            description:item.product.description
        }})
        return cartProducts
    },
    user:async(parent,args,ctx,info)=>{
        const user=await prisma.user.findMany({
            where:{
                id:parent.id
            }
        })
        return user
    }
}

module.exports=Cart