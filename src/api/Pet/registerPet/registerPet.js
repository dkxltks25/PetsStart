import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";


export default{
    Mutation:{
        registerPet: async(_,args,{request})=>{
            isAuthenticated(request);
            const {name,age,species,height="",weight="",deviceName,sex} = args;
            const {user} = request;
            try{
                 await prisma.createPet({
                    name,
                    age,
                    species,
                    height,
                    weight,
                    deviceName,
                    sex,
                    user:{
                        connect:{
                            id:user.id
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