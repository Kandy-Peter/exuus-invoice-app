import express from "express";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import  User from "../../models/User.js";

export const getUsers = async (req: express.Request, res: express.Response) => {  
  try {
    const users = await User.findAll();

    return res.status(200).json({
      message: "Success to get users",
      status: 200,
      data: users,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to get users:" + err.message,
        status: 500,
      });
    }
  }
}

export const userSingUp = async (req: express.Request, res: express.Response) => {
  try {
    const id = nanoid();
    const password = bcrypt.hashSync(req.body.password, 8);

    const user = await User.create({
      ...req.body,
      id,
      password,
    });

    return res.status(200).json({
      message: "Success to create user",
      status: 200,
      data: user,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to create user:" + err.message,
        status: 500,
      });
    }
  }
}

export const userSingIn = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: 404,
      });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({
        message: "Invalid password",
        status: 401,
      });
    }

    const token = jwt.sign({ id: user.id }, "test", {
      expiresIn: 86400,
    });

    return res.status(200).json({
      message: "Success to login",
      status: 200,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to login:" + err.message,
        status: 500,
      });
    }
  }
}
