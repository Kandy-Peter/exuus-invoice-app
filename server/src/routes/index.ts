const exp = require('express');
const router = exp.Router();

const invoiceController = require('../controllers/invoices');

const auth = require("../middleware/auth");

router.get("/", invoiceController.getInvoices);
router.post("/", auth, invoiceController.createInvoice);
router.patch("/:id", auth, invoiceController.updateInvoice);
router.delete("/:id", auth, invoiceController.deleteInvoice);
router.patch("/:id/paid", auth, invoiceController.paidInvoice);

module.exports = router;

module.exports = router;
