import { body} from 'express-validator';
import * as middleware from "../../middlewares/index.js";

export const validateInvoiceCreate = [
  body('streetAddress')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Invoice number must be at least 3 characters long'),
  body('invoiceDate')
    .trim()
    .isDate()
    .withMessage('Invoice date must be a valid date'),
  body('dueDate')
    .trim()
    .isDate()
    .withMessage('Due date must be a valid date'),
  body('clientName')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Client name must be at least 3 characters long'),
  body('clientEmail')
    .trim()
    .isEmail()
    .withMessage('Client email must be a valid email address'),
  body('clientAddress')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Client address must be at least 3 characters long'),
  body('city')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Client phone must be at least 3 characters long'),
  body('description')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Description must be at least 3 characters long'),
  body('paymentTerms')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Payment terms must be at least 3 characters long'),
  body('total')
    .trim()
    .isNumeric()
    .withMessage('Total must be a valid number'),
  body('status')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Status must be at least 3 characters long'),
  middleware.handleValidationError,
];
