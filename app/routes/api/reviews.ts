import { json, LoaderFunction } from "@remix-run/node";

const fetchReviewsFromShopify = async (productId: string) => {
  const response = await fetch(
    `https://jaydens-test-store.myshopify.com/products/${productId}/reviews.json`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SHOPIFY_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data.reviews || [];
};

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const productId = url.searchParams.get("productId") || "";
  const reviews = await fetchReviewsFromShopify(productId);

  return json({ reviews });
};
