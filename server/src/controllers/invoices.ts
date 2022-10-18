import Invoice from "../models/invoice";
import { Request, Response } from "express";

module.exports = {
  getInvoices(req: Request, res: Response) {
    Invoice.findAll()
      .then((invoices: any) => {
        res.status(200).send(invoices);
      })
      .catch((err: any) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving invoices.",
        });
      });
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
    const { id } = req.params;
    Invoice.update(req.body, { where: { id } })
      .then((invoice: any) => res.json(invoice))
      .catch((err: any) => res.status(400).json({ error: err }));
  },

  deleteInvoice (req: Request, res: Response) {
    Invoice.destroy({ where: { id: req.params.id } })
      .then((invoice: any) => res.json(invoice))
      .catch((err: any) =>
        res.status(400).json({ error: "Unable to delete the Database" })
      );
  },

  async paidInvoice(req: Request, res: Response) {
    const { id } = req.params;
    const invoice = await Invoice.findByPk(id);
    if (invoice) {
      invoice.status = "paid";
      invoice.save();
      res.json(invoice);
    } else {
      res.status(404).json({ error: "Invoice not found" });
    }
  },
};
