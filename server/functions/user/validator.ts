import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const validateUser = async (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      status: 400,
      errors: errors.array(),
    });
  }
  next();
}

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
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  validateUser,
];