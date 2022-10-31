import express from "express";

import * as InvoiceController from "./controller.js";
import * as middleware from "../../middlewares/index.js";

const router = express.Router();

router.get(
  "/invoices",
  middleware.handleValidationError,
  InvoiceController.getInvoices
);

router.get("/invoices/:id", InvoiceController.getInvoice);

router.post(
  "/invoices",
  middleware.handleValidationError,
  InvoiceController.createInvoice
);

router.put(
  "/invoices/:id",
  middleware.handleValidationError,
  InvoiceController.updateInvoice
);

router.delete("/invoices/:id", InvoiceController.deleteInvoice);

export default router;
