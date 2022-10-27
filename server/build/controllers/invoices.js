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
        invoice_1.default.create(Object.assign(Object.assign({}, invoice), { creator: req.userId, total: totalInv }))
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
    paidInvoice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const invoice = yield invoice_1.default.findByPk(id);
            if (invoice) {
                invoice.status = "paid";
                invoice.save();
                res.json(invoice);
            }
            else {
                res.status(404).json({ error: "Invoice not found" });
            }
        });
    },
};
