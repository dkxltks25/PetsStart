import graphqlHTTP from 'express-graphql';

import "./env";
import url from "url";
const port = process.env.PORT || 4000;
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

import {authenticateJWT} from "./passport";
import { prisma } from "../generated/prisma-client";
const server = new GraphQLServer({
    schema,
    context:({request})=>({request})
});
server.express.use(logger("dev"));  
server.express.use(authenticateJWT);
server.start({port},()=>{
    console.log(`Server running on ${port}`);
})

server.express.get("/api",async (req,res)=>{
    try{
        const parsedObject = url.parse(req.url);
        const {query} = parsedObject;
        const QueryArray = query.split("&")
        const QueryKeyValue = [];
        QueryArray.map((index)=>{
            QueryKeyValue.push(index.split("="));
        })
        const findPet =await prisma.pets({where:{deviceName_in:QueryKeyValue[0][1]}});
        if(findPet === undefined){
            res.send("등록된 계정이 없습니다");
        }
        const {id} = findPet[0];
        const [_,deviceName] = QueryKeyValue[0];
        const [__,Temp] = QueryKeyValue[1];
        try{
            const result = await prisma.createTemp({
                Temp:parseFloat(Temp),
                deviceName:deviceName,
                pet:{
                    connect:{
                        id:id
                    }
                }
            })
            res.send(`성공!!!!!:deviceName-${deviceName} \n Temp-${Temp}`);
                
        }catch(e){
            console.log(e);
            res.send("잘못된 방식입니다");
        }
       
    }catch{
        res.send("잘못된 접근입니다 -Park");
    }

});

server.express.get("/getData",async(req,res)=>{
    try{
        const parsedObject = url.parse(req.url);
        const {query} = parsedObject;
        const QueryArray = query.split("&");
        const QueryKeyValue = [];
        QueryArray.map((index)=>{
            QueryKeyValue.push(index.split("="));
        })
        const findPet = await prisma.temps({where:{deviceName:QueryKeyValue[1]}});
        res.send(findPet);
    }catch(e){
        res.send(e);
    }
    

})
