import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";
import { PET } from "../../../../fragments";

export default{
    Mutation:{
        insertTemp: async(_,args) =>{
            const {temp,deviceName} = args;
            const findPet =await prisma.pets({where:{deviceName_in:deviceName}});
            if(findPet === undefined){
                throw "등록된 계정이 없습니다";
            }
            const {id} = findPet[0];
            try{
                const result = await prisma.createTemp({
                    Temp:temp,
                    deviceName:deviceName,
                    pet:{
                        connect:{
                            id:id
                        }
                    }
                })
            }catch(e){
                console.error(e);
                return false;
            }
            console.log(findPet);
            return true;
            
            
    }
}
}

