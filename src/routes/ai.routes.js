import express from "express";
import * as aiController from "../controllers/ai.controller.js";

const router = express.Router();

/*
**  POST: /ai/get-response
*/
router.post("/get-review", aiController.getResponseController);


export default router;