import express from "express"
import aiRoutes  from "./routes/ai.routes.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use("cors");

app.use("/ai", aiRoutes);


app.get("/", (req, res)=>{
    res.status(200).json({
        message: "API working fine"
    });
})

export default app;