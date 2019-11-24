import {prisma} from "../../../../generated/prisma-client";

export default{
    Mutation:{
        createAccount: async(_,args)=>{
            const { username , email ,name } = args;
            try{
              await prisma.createUser({username,email,name});
              return true;
            }catch{
              return false;
            }
      
        }  
    }
}