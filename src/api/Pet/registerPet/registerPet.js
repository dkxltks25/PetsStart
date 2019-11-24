import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";


export default{
    Mutation:{
        registerPet: async(_,args,{request})=>{
            isAuthenticated(request);
            const {name,age,species,height="",weight="",userId,device} = args;
            const {user} = request;
            try{
                await prisma.createPet({
                    name,
                    age,species,
                    height,
                    weight,
                    device,
                    user:{
                        connect:{
                            id:userId
                        }
                    }
                });
                return true;
            }catch(error){
                console.log(error);
                return false;
            }
        }
    }
}