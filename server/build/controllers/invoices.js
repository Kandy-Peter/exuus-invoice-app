"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = __importDefault(require("../models/invoice"));
module.exports = {
    getInvoices(req, res) {
        invoice_1.default.findAll()
            .then((invoices) => {
            res.status(200).send(invoices);
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving invoices.",
            });
        });
    },
    createInvoice(req, res) {
        const invoice = req.body;
        let totalInv = 0;
        req.body.invoices &&
            req.body.invoices.forEach((item) => {
                totalInv += item.total;
            });
        invoice_1.default.create({ ...invoice, creator: req.userId, total: totalInv })
            .then((invoice) => res.json(invoice))
            .catch((err) => res.status(400).json({ error: err }));
    },
    updateInvoice(req, res) {
        const { id } = req.params;
        invoice_1.default.update(req.body, { where: { id } })
            .then((invoice) => res.json(invoice))
            .catch((err) => res.status(400).json({ error: err }));
    },
    deleteInvoice(req, res) {
        invoice_1.default.destroy({ where: { id: req.params.id } })
            .then((invoice) => res.json(invoice))
            .catch((err) => res.status(400).json({ error: "Unable to delete the Database" }));
    },
    async paidInvoice(req, res) {
        const { id } = req.params;
        const invoice = await invoice_1.default.findByPk(id);
        if (invoice) {
            invoice.status = "paid";
            invoice.save();
            res.json(invoice);
        }
        else {
            res.status(404).json({ error: "Invoice not found" });
        }
    },
};
