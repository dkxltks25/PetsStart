import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        myPetIs:async(_,__,{request})=>{
            isAuthenticated(request);
            const {user:{id}} = request;
            try{
                const result = await prisma.$exists.pet({user:{
                    id:id
                }});
                if(result === true){
                    return true;
                }else{
                    return false;
                }

            }catch{
                return false;
            }
            
        }
    }
}
