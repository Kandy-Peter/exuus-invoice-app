import express from "express";

import * as InvoiceController from "./controller.js";
import * as middleware from "../../middlewares/index.js";

const router = express.Router();

router.get(
  "/invoices",
  InvoiceController.getInvoices
);

router.get("/invoices/:id", middleware.auth, InvoiceController.getInvoice);

router.post(
  "/invoices",
  middleware.handleValidationError,
  middleware.auth,
  InvoiceController.createInvoice
);

router.patch(
  "/invoices/:id",
  middleware.handleValidationError,
  middleware.auth,
  InvoiceController.updateInvoice
);

router.delete("/invoices/:id", middleware.auth, InvoiceController.deleteInvoice);
router.patch("/invoices/:id/paid", middleware.auth, InvoiceController.paidInvoice);

export default router;
