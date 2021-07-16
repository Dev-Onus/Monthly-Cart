const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Address={
    user:async(parent,args,ctx,info)=>{
        const user=await prisma.user.findMany({
            where:{
                id:parent.userID
            }
        })
        return user
    }
}
module.exports=Address
