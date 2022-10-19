import React from "react";
import { Segment } from "semantic-ui-react";

const SkeletonCard = () => {
  // apply a random color to each segment
  const colors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Segment color={randomColor}  className="invoice-skeleton"></Segment>
  );
};

export default SkeletonCard;
