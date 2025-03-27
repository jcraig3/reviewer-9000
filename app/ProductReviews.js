import React, { useEffect, useState } from "react";
import { Table } from "@shopify/polaris";

const fetchReviews = async (productId) => {
  const response = await fetch(`/api/reviews?productId=${productId}`);
  const reviews = await response.json();
  return reviews;
};

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(productId).then(setReviews);
  }, [productId]);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Review</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {reviews.map((review) => (
          <Table.Row key={review.id}>
            <Table.Cell>{review.message}</Table.Cell>
            <Table.Cell>{review.rating}</Table.Cell>
            <Table.Cell>
              {new Date(review.createdAt).toLocaleDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProductReviews;
