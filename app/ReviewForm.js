import React, { useState } from "react";

const ReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/reviews`, {
      method: "POST",
      body: JSON.stringify({ productId, rating, message }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Review submitted successfully!");
    } else {
      alert("Error submitting review");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          min="1"
          max="5"
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
