import {prisma} from "../../../../generated/prisma-client";

export default{
    Mutation:{
        createAccount: async(_,args)=>{
            const { username , email ,name="Testing",password } = args;
            const Result = await prisma.$exists.user({email});
            console.log(Result);
            if(Result){
              return false;
            }
            try{
                await prisma.createUser({username,email,name,password});
                return true;
              }catch{
                return false;
              }
        }  
    }
}