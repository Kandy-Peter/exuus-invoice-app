"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userExpress = require("express");
const { signup, signin } = require("../controllers/users");
const userRouter = userExpress.Router();
userRouter.post("/signin", signin);
userRouter.post("/signup", signup);
exports.default = userRouter;
