import express from "express"
import aiRoutes  from "./routes/ai.routes.js";

const app=express();
app.use(express.json())

app.use("/ai", aiRoutes);


app.get("/", (req, res)=>{
    res.status(200).json({
        message: "API working fine"
    });
})

export default app;