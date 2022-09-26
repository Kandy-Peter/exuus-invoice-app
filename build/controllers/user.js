"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const jwtToken = require("jsonwebtoken");
const User = require("../src/models").User;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const existingUser = yield User.findOne({ email });
        if (!existingUser)
            return res.status(404).json({ message: "User doesn't exist." });
        const isPasswordCorrect = yield bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect)
            res.status(404).json({ message: "Invalid Credentials" });
        const token = jwtToken.sign({ email: existingUser.email, id: existingUser._id }, "test", { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const existingUser = yield User.findOne({ email });
        if (existingUser)
            return res.status(404).json({ message: "User already exist." });
        const hashedPassword = yield bcrypt.hash(password, 12);
        const result = yield User.create({ name, email, password: hashedPassword });
        const token = jwtToken.sign({ name: result.name, email: result.email, id: result._id }, "test", {
            expiresIn: "1h",
        });
        res.status(200).json({ result: result, token });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
module.exports = {
    signup,
    signin,
};
