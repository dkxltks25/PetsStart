import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        myPets: async(_,__,{request})=>{
            isAuthenticated(request);
            const {user} = request;
            return await prisma.pets({
                where:{
                    user:{
                        id:user.id
                    }
                }
            });
        }
    }
}