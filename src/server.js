
import "./env";
const port = process.env.PORT || 4000;

import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

import {authenticateJWT} from "./passport";
const server = new GraphQLServer({
    schema,
    context:({request})=>({request})
});
server.express.use(logger("dev"));  
server.express.use(authenticateJWT);
server.start({port},()=>{
    console.log(`Server running on ${port}`);
})