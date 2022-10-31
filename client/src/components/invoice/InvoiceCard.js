import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Segment } from "semantic-ui-react";
import randomColor from "../utils/reandom_colors";

const InvoiceCard = ({ data }) => {

  let badgeClass = "";
  switch (data.status) {
    case "pending":
      badgeClass = "pending";
      break;
    case "paid":
      badgeClass = "paid";
      break;
    default:
      badgeClass = "draft";
  }
  return (
    <Segment color={randomColor()} className="invoice-skeleton">
      <Link
        to={`/invoice/${data._id}`}
        className="invoice-card"
      >
          <h2>
            <span>#</span>
            {data.id.substring(data.id.length - 6)}
          </h2>
          <small>{`Due ${moment(
            data.paymentDue
          ).format("MMM Do YY")}`}</small>
          <small>{data.clientName}</small>

          <small>
            ${data.total}
          </small>
          <div
            className={`${badgeClass} badge`}
          >
            <small>
              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            </small>
          </div>
      </Link>
    </Segment>
  );
};

export default InvoiceCard;
