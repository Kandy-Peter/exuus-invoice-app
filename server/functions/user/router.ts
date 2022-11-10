import express from "express";
import * as UserAuth from "./controller.js";
import * as UserValidator from "./validator.js";

const router = express.Router();

router.post("/signup", UserValidator.validateUserCreate, UserAuth.userSingUp);
router.post("/signin", UserAuth.userSingIn);

export default router;
