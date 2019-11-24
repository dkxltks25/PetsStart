import {adjectives,nonus} from "./word";
import jwt from "jsonwebtoken";

export const secretGenerator = ()=>{
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nonus[randomNumber]}`;
}


export const generateToken = id => jwt.sign({id},process.env.JWT_SECRET);