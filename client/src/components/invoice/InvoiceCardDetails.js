import React from "react";
import { formatDate, getSubstring } from "../utils/utils";
import { Divider, Table } from "semantic-ui-react";

const InvoiceCardDetails = ({ data }) => {
  if (data.length > 0) {
    return (
      <div className="item-details item-clm">
        <div className="">
          <div>
            <h1 className="">
              <span className="">#</span>
              {getSubstring(data[0]._id, 6)}
            </h1>
            <p>
              {data[0].description}
            </p>
          </div>
          <Divider />
          <address className="">
            <p className=" ">
              {data[0].streetAddress}
            </p>
            <p className=" ">{data[0].city}</p>
            <p className=" ">
              {data[0].postCode}
            </p>
            <p className=" ">{data[0].country}</p>
          </address>
        </div>
        <Divider />
        <div className=" ">
          <div className="date-row">
            <div className="date-clm">
              <p>Invoice Date: </p>
              <span className="">
                {formatDate(data[0].invoiceDate)}
              </span>
            </div>
            
            <div  className="date-clm">
              <p>Payment Due: </p>
              <span>
                {formatDate(data[0].paymentDue)}
              </span>
            </div>
            
          </div>
          <Divider />
          <address className="text-neutral not-italic mx-2">
            <div>
              <small className="">Bill To</small>
              <h2 className="">
                {data[0].clientName}
              </h2>
            </div>
            <div className="mt-2">
              <p className="">
                {data[0].clientStreetAddress}
              </p>
              <p className="">{data[0].clientCity}</p>
              <p className="">{data[0].clientPostCode}</p>
              <p className="">{data[0].clientCountry}</p>
            </div>
          </address>
          <Divider />
          <div className="">
            <p className="">Sent to</p>
            <h2 className="">
              {data[0].clientEmail}
            </h2>
          </div>
        </div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item name</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {data[0].invoices.map((item, index) => (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
                <Table.Cell>${item.price}</Table.Cell>
                <Table.Cell>${item.total}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <h3 className="text-neutral">{`Amount ${
                  data[0].status === "paid" ? "Paid" : "Due"
                }`}</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="text-neutral">${data[0].total}</h3>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  } else {
    return <h1 className="">Loading....</h1>;
  }
};

export default InvoiceCardDetails;
