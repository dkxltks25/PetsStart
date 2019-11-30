import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../util";

export default{
    Mutation:{
        confirmSecret: async(_,args) =>{
            const {email,password} = args;
            const user = await prisma.user({email});
            console.log(password);
            console.log(user);
            if(user.password === password){
                return generateToken(user.id);
            }else{
                throw Error("잘못된 이메일입니다");
            }
        }
    }
}