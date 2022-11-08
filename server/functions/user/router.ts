import express from "express";
import * as InvoiceController from "./controller.js";

const router = express.Router();

router.post("/signup", InvoiceController.userSingUp);
router.post("/signin", InvoiceController.userSingIn);


export default router;
