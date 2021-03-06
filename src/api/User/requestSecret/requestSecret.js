import { isAuthenticated } from "../../../middlewares";
import { secretGenerator } from "../../../util";
import { prisma } from "../../../../generated/prisma-client";

export default{
    Mutation:{
        requestSecret: async(_,args,{request})=>{
            const {email} =args;
            const loginSecret = secretGenerator();
        
            try{
                console.log(loginSecret);
                await prisma.updateUser({data:{loginSecret},where:{email}})
                return true;
            }catch(error){
                console.log(error);
                return false;   
            }
        }
    }
}