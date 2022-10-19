import React from "react";
import { Segment } from "semantic-ui-react";
import randomColor from "../utils/reandom_colors";

const SkeletonCard = () => {
  return (
    <Segment color={randomColor()}  className="invoice-skeleton"></Segment>
  );
};

export default SkeletonCard;
