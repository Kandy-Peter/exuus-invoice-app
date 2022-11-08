import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useForm,
  Controller,
  useFieldArray,
  FormProvider,
  useWatch,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from "../utils/Label";
import Input from "../utils/Input";
import Item from "./Item";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Button, Form, Divider } from 'semantic-ui-react'
import { createInvoice, updateInvoice } from "../../actions/invoices";

const CreateInvoice = ({ openForm, setOpenForm, invoice }) => {
  let history = useNavigate();
  const formMethods = useForm({
    defaultValues: {
      invoiceDate: new Date(),
    },
  });

  const { register, control, handleSubmit, setValue, reset } = formMethods;
  const formData = useWatch({
    control,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "invoices",
  });

  const dispatch = useDispatch();

  // submit handler
  const onSubmit = async (data, status) => {
    // console.log(data);
    if (invoice) {
      await dispatch(updateInvoice(invoice.id, data));
      setOpenForm(!openForm);
      history("/");
      reset("", {
        keepValues: false,
      });
    } else {
      const addDays = (days) => {
        let date = new Date(data.invoiceDate.getTime());
        date.setDate(date.getDate() + days);
        return date;
      };

      await dispatch(
        createInvoice({
          ...data,
          status,
          paymentDue: addDays(+data.paymentTerms),
        })
      );
      setOpenForm(!openForm);
      history("/");
    }
  };

  useEffect(() => {
    if (invoice) {
      for (const key in invoice) {
        switch (key) {
          case "paymentDue":
            setValue(key, moment(invoice[key]).toDate());
            break;
          case "invoiceDate":
            setValue(key, moment(invoice[key]).toDate());
            break;
          case "createdAt":
            setValue(key, moment(invoice[key]).toDate());
            break;
          case "updatedAt":
            setValue(key, moment(invoice[key]).toDate());
            break;
          default:
            setValue(key, invoice[key]);
        }
      }
    }
  }, [invoice, setValue]);

  return (
    <div
      className={` ${
        !openForm ? " hidden" : "form-visible form-container"
      }`}
      // className={`transition ${
      //   !openForm ? "transform translate-x-full hidden" : "-translate-x-full"
      // }`}
    >
      <div
        className="fixed top-0 left-0 flex items-center justify-center w-full h-screen z-10 bg-white bg-opacity-10"
        onClick={() => setOpenForm(!openForm)}
      ></div>
      <div>
        <FormProvider {...formMethods}>
          <Form
            onSubmit={handleSubmit((data) => onSubmit(data, "pending"))}
            className="form-row"
          >
            <h1>{invoice ? "Edit Invoice" : "Create Invoice"}</h1>
            <div className="clm-form">
              <Form.Group>
                <Form.Field>
                  <Label labelName="Street Address" />
                  <Input inputName="streetAddress" type="text" />
                </Form.Field>
                <Form.Field>
                  <Label labelName="City" />
                  <Input inputName="city" type="text" />
                </Form.Field>
              </Form.Group>
              <Form.Field className="md:mx-2">
                <Label labelName="Post Code" />
                <Input inputName="postcode" type="text" appearance />
              </Form.Field>
              <Form.Field>
                <Label labelName="Country" />
                <Input inputName="country" type="text" />
              </Form.Field>
              <Divider />
              <small className="text-secondaryTwo font-bold text-xs mt-8">
                Bill To
              </small>
              <Form.Field>
                <Label labelName="Client Name" />
                <Input inputName="clientName" type="text" />
              </Form.Field>
              <Form.Field>
                <Label labelName="Client Email" />
                <Input inputName="clientEmail" type="email" />
              </Form.Field>
              <Form.Group>
                <Form.Field>
                  <Label labelName="Street Address" />
                  <Input inputName="clientStreetAddress" type="text" />
                </Form.Field>
                  <Form.Field>
                    <Label labelName="City" />
                    <Input inputName="clientCity" type="text" />
                  </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field className="md:mx-2">
                  <Label labelName="Post Code" />
                  <Input inputName="clientPostcode" type="text" appearance />
                </Form.Field>
                <Form.Field>
                  <Label labelName="Country" />
                  <Input inputName="clientCountry" type="text" />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                  <Form.Field>
                    <Label labelName="Invoice Date" />
                    <Controller
                      control={control}
                      name="invoiceDate"
                      render={({ field }) => (
                        <DatePicker
                          className="w-full bg-primaryOne p-3 rounded-md shadow-md border border-borderOne focus:outline-none focus:border-secondaryOne transition text-white font-bold text-xs"
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                          dateFormat="dd/MM/yyyy"
                        />
                      )}
                    />
                  </Form.Field>
                  <Form.Field className="w-1/2 ml-2">
                    <Label labelName="Payment Terms" />
                    <select
                      className="w-full bg-primaryOne p-3 rounded-md shadow-md border border-borderOne focus:outline-none focus:border-secondaryOne transition text-white font-bold text-xs"
                      name="paymentTerms"
                      id="paymentTerms"
                      {...register("paymentTerms", { required: true })}
                    >
                      <option value="1">Next 1 Day</option>
                      <option value="7">Next 7 Days</option>
                      <option value="14">Next 14 Days</option>
                      <option value="30">Next 30 Days</option>
                    </select>
                  </Form.Field>
              </Form.Group>

              <Form.Field>
                <Label labelName="Descriptions" />
                <Input inputName="description" />
              </Form.Field>
              <Divider />
              <p className="text-gray-500 text-lg mt-6 mb-2 font-bold">
                Item List
              </p>
              <div>
                {fields.map((invoice, index) => (
                  <Item
                    key={invoice.id}
                    index={index}
                    fieldId={`invoices.${index}`}
                    remove={remove}
                  />
                ))}
              </div>
              <Button
              className="add-input-btn"
                onClick={(e) => {
                  e.preventDefault();
                  append({ name: "", quantity: "", price: "", total: 0 });
                }}
                primary
              >
                Add New Item
              </Button>
            </div>
            <Button.Group>
              <Button
                onClick={() => setOpenForm(!openForm)}
                negative
              >
                Discard
              </Button>
              <Button.Or />
              <Button
                onClick={() => onSubmit(formData, "draft")}
                color="grey"
              >
                Save as Draft
              </Button>
              <Button.Or />
              <Button positive>
                Save & Send
              </Button>
            </Button.Group>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateInvoice;
