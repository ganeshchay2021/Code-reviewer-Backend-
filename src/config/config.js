import dotenv from "dotenv";
dotenv.config();


if(!process.env.port){
    throw new Error("Port is not defined");
}

if(!process.env.GOOGLE_GEMINI_KEY){
    throw new Error("Google gemini key is not defined");
}

const config={
    port:process.env.port,
    GOOGLE_GEMINI_KEY:process.env.GOOGLE_GEMINI_KEY,
}

export default config;