import React from "react";
import ReviewForm from "../../app/components/product/ReviewForm";

const ReviewEmbed = ({ productId }) => {
  return (
    <div>
      <h2>Submit a Review</h2>
      <ReviewForm productId={productId} />
    </div>
  );
};

export default ReviewEmbed;
