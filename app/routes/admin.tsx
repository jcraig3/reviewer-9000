import { useEffect, useState } from "react";
import { Text, Page, Card, DataTable } from "@shopify/polaris";
import { json, LoaderFunction } from "@remix-run/node";

// Fetch reviews from Shopify's API
const fetchReviews = async (productId: string) => {
  const response = await fetch(`/api/reviews?productId=${productId}`);
  const data = await response.json();
  return data.reviews || [];
};

export let loader: LoaderFunction = async () => {
  // Replace with logic to get all products or a specific product to display reviews
  const productId = "123"; // Placeholder, dynamically fetch this as needed
  const reviews = await fetchReviews(productId);

  return json({ reviews });
};

export default function AdminPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews("123").then(setReviews);
  }, []);

  const rows = reviews.map((review: any) => [
    review.message,
    review.rating,
    review.createdAt,
  ]);

  return (
    <Page title="Product Reviews">
      <Card>
        <Text as="h1">Product Reviews</Text>
        <DataTable
          columnContentTypes={["text", "numeric", "text"]}
          headings={["Review", "Rating", "Date"]}
          rows={rows}
        />
      </Card>
    </Page>
  );
}
