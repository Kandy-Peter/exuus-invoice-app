const express = require('express');
const router = express.Router();

const {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  paidInvoice,
} = require("../controllers/Invoices");

const auth = require("../middleware/auth");

router.get("/", getInvoices);
router.post("/", auth, createInvoice);
router.patch("/:id", auth, updateInvoice);
router.delete("/:id", auth, deleteInvoice);
router.patch("/:id/paid", auth, paidInvoice);

module.exports = router;

module.exports = router;
