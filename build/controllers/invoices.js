"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice = require("../src/models/invoice");
module.exports = {
    getInvoices(req, res) {
        const { status } = req.query;
        if (status) {
            Invoice.findAll({ status })
                .then((invoice) => res.json(invoice))
                .catch((err) => res.status(404).json({ noinvoicesfound: "No Invoices found" }));
        }
        Invoice.findAll()
            .then((invoices) => res.json(invoices))
            .catch((err) => res.status(404).json({ noinvoicesfound: "No Invoices found" }));
    },
    createInvoice(req, res) {
        const invoice = req.body;
        let totalInv = 0;
        req.body.invoices &&
            req.body.invoices.forEach((item) => {
                totalInv += item.total;
            });
        // req.body.total = total;
        Invoice.create(Object.assign(Object.assign({}, invoice), { creator: req.userId, total }))
            .then((invoice) => res.json(invoice))
            .catch((err) => res.status(400).json({ error: err }));
    },
    updateInvoice(req, res) {
        Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((invoice) => res.json(invoice))
            .catch((err) => res.status(400).json({ error: "Unable to update the Database" }));
    },
    deleteInvoice(req, res) {
        Invoice.findByIdAndRemove(req.params.id, req.body)
            .then((invoice) => res.json({ mgs: "Invoice entry deleted successfully" }))
            .catch((err) => res.status(404).json({ error: "No such an Invoice" }));
    },
    paidInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updatedInvoice = yield Invoice.findByIdAndUpdate(id, { status: "paid" }, { new: true });
            res.json(updatedInvoice);
        });
    }
};
