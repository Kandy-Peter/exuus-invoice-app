import express from "express";

import * as InvoiceController from "./controller.js";
import * as middleware from "../../middlewares/index.js";

const router = express.Router();

router.post("/signup", InvoiceController.userSingUp);
router.post("/signin", InvoiceController.userSingIn);
// router.get("/", middleware.auth, InvoiceController.getUsers);

export default router;