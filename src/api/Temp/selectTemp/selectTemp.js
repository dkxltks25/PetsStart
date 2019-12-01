import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        selectTemp: async(_,args)=>{
            const {deviceName} = args;
            const findPet =await prisma.pets({where:{deviceName_in:deviceName}});
            const {id} = findPet[0];
            if(id === undefined){
                return null;
            }
            try{
               const result =  await prisma.pet({id}).device();
                return result;
            }catch(e){
                console.log(e);
                return null;
            }
        }
    }
}