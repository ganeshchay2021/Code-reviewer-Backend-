import * as  aiServices from "../services/ai.services.js";

export async function getResponseController(req, res) {
    try{
        const code= req.body.code;

        if(!code){
            return res.status(400).json({
                message: "Code is required"
            });
        }

        const response = await aiServices.generateContent(code);

        if(!response){
            return res.status(401).json({
                message: "Something went wrong"
            });
        }
        
        res.send(response);

    }catch(error){
        console.log("Error",error);
        return res.status(500).json({
            message: error.message
        });
    }
}