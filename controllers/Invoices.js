const Invoice = require("../models/invoice");


module.exports = {
  getInvoices(req, res) {
    const { status } = req.query;
    if (status) {
      Invoice.find({ status })
        .then((invoices) => res.json(invoices))
        .catch((err) =>
          res.status(404).json({ noinvoicesfound: "No Invoices found" })
        );
    } else {
      Invoice.find()
        .then((invoices) => res.json(invoices))
        .catch((err) =>
          res.status(404).json({ noinvoicesfound: "No Invoices found" })
        );
    }
  },

  createInvoice(req, res) {
    const invoice = req.body;
    let total = 0;
    req.body.invoices &&
      req.body.invoices.forEach((item) => {
        total += item.total;
      });
    // req.body.total = total;
    Invoice.create({ ...invoice, creator: req.userId, total })
      .then((invoice) => res.json(invoice))
      .catch((err) => res.status(400).json({ error: err }));
  },

  updateInvoice(req, res) {
    Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((invoice) => res.json(invoice))
      .catch((err) =>
        res.status(400).json({ error: "Unable to update the Database" })
      );
  },

  deleteInvoice (req, res) {
    Invoice.findByIdAndRemove(req.params.id, req.body)
      .then((invoice) => res.json({ mgs: "Invoice entry deleted successfully" }))
      .catch((err) => res.status(404).json({ error: "No such an Invoice" }));
  },

  async paidInvoice (req, res) {
    const { id } = req.params;
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      id,
      { status: "paid" },
      { new: true }
    );
    res.json(updatedInvoice);
  }

};
