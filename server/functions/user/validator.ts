import { body } from 'express-validator';
import * as middleware from "../../middlewares/index.js";


export const validateUserCreate = [
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    //add a custom validator to check if the password contains at least one number
    .custom((value, { req }) => {
      if (!/\d/.test(value)) {
        throw new Error('Password must contain at least one number');
      }
      return true;
    }),
  middleware.handleValidationError,
];