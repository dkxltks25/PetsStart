import { prisma } from "../../../../generated/prisma-client";


export default{
   Query:{
       adminSeeAllPet: ()=>{
           return prisma.pets();
       }
   }
}