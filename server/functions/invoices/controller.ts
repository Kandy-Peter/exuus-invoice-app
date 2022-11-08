import express from "express";
import { nanoid } from "nanoid";

import Invoice from "../../models/Invoice.js";

const getInvoices = async (req: express.Request, res: express.Response) => {
  try {
    const invoices = await Invoice.findAll();

    return res.status(200).json(invoices);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to get invoices:" + err.message,
        status: 500,
      });
    }
  }
}

const getInvoice = async (req: express.Request, res: express.Response) => {
  const id = req.params?.id as string | undefined;

  try {
    const invoice = await Invoice.findOne({
      where: { id },
    });

    return res.status(200).json(invoice);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to get invoice:" + err.message,
        status: 500,
      });
    }
  }
}

const createInvoice = async (req: express.Request, res: express.Response) => {
  try {
    const id = nanoid();
    let total = 0;
    let creator = req.userId;

    req.body.invoices && req.body.invoices.forEach((invoice: any) => {
      total += invoice.total;
    });

    const invoice = await Invoice.create({
      ...req.body,
      id,
      total,
      creator,
    });

    return res.status(200).json(invoice);
    // return res.status(200).json({
    //   message: "Success to create invoice",
    //   status: 200,
    //   data: invoice,
    // });
  }
  catch (err) {

    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to create invoice:" + err.message,
        status: 500,
      });
    }
  }

}

const updateInvoice = async (req: express.Request, res: express.Response) => {
  const id = req.params?.id as string | undefined;

  try {
    const invoice = await Invoice.findOne({
      where: { id },
    });

    if (invoice) {
      await invoice.update(req.body);

      return res.status(200).json(invoice);
    }

    return res.status(404).json({
      message: "Invoice not found",
      status: 404,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to update invoice:" + err.message,
        status: 500,
      });
    }
  }
}

const deleteInvoice = async (req: express.Request, res: express.Response) => {
  const id = req.params?.id as string | undefined;

  try {
    const invoice = await Invoice.findOne({
      where: { id },
    });

    if (invoice) {
      await invoice.destroy();

      return res.status(200).json({
        message: "Success to delete invoice",
        status: 200,
      });
    }

    return res.status(404).json({
      message: "Invoice not found",
      status: 404,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to delete invoice:" + err.message,
        status: 500,
      });
    }
  }
}

async function paidInvoice (req: express.Request, res: express.Response) {
  const id = req.params?.id as string | undefined;

  try {
    const invoice = await Invoice.findOne({
      where: { id },
    });

    if (invoice) {
      await invoice.update({
        status: 'paid'
      });

      return res.status(200).json(invoice);
    }

    return res.status(404).json({
      message: "Invoice not found",
      status: 404,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to paid invoice:" + err.message,
        status: 500,

      });
    }
  }
}

export {
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  paidInvoice
};