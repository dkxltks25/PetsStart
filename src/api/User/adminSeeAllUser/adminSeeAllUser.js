import { prisma } from "../../../../generated/prisma-client";


export default{
    Query:{
        adminSeeAllUser: async(_,__) =>{
            return prisma.users();
        }
    }
}