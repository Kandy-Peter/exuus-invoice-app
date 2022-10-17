import Invoice from "../models/invoice";
import { AnyCnameRecord } from "dns";
import { Request, Response } from "express";

module.exports = {
  getInvoices(req: Request, res: Response) {
    const { status } = req.query;
    if (status) {
      Invoice.findAll({ status })
        .then((invoice: any) => res.json(invoice))
        .catch((err: any) =>
          res.status(404).json({ noinvoicesfound: "No Invoices found" })
        );
    }
    Invoice.findAll()
      .then((invoices: any) => res.json(invoices))
      .catch((err: any) =>
        res.status(404).json({ noinvoicesfound: "No Invoices found" })
      );
  },

  createInvoice(req: Request, res: Response) {
    const invoice = req.body;
    let totalInv = 0;
    req.body.invoices &&
      req.body.invoices.forEach((item: any) => {
        totalInv += item.total;
      });
    // req.body.total = total;
    Invoice.create({ ...invoice, creator: req.userId, total: totalInv })
      .then((invoice: any) => res.json(invoice))
      .catch((err: any) => res.status(400).json({ error: err }));
  },

  updateInvoice(req: Request, res: Response) {
    Invoice.update(req.params.id, req.body)
      .then((invoice: any) => res.json(invoice))
      .catch((err: any) =>
        res.status(400).json({ error: "Unable to update the Database" })
      );
  },

  deleteInvoice (req: Request, res: Response) {
    Invoice.destroy(req.params.id, req.body)
      .then((invoice: any) => res.json({ mgs: "Invoice entry deleted successfully" }))
      .catch((err: AnyCnameRecord) => res.status(404).json({ error: "No such an Invoice" }));
  },

  async paidInvoice (req: Request, res: Response) {
    const { id } = req.params;
    const updatedInvoice = await Invoice.update(
      id,
      { status: "paid" }
    );
    res.json(updatedInvoice);
  }

};
