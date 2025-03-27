import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GET_PRODUCTS_QUERY } from "../graphql/getProducts";
import { Card, Page } from "@shopify/polaris";

export async function loader() {
  const response = await shopifyFetch(GET_PRODUCTS_QUERY);
  return json(await response.json());
}

export default function ProductsPage() {
  const data = useLoaderData();
  return (
    <Page title="Products">
      {data.data.products.edges.map(({ node }) => (
        <Card key={node.id} title={node.title} sectioned>
          <img src={node.featuredImage?.url} alt={node.title} width="100" />
          <p>
            Price: {node.priceRangeV2.minVariantPrice.amount}{" "}
            {node.priceRangeV2.minVariantPrice.currencyCode}
          </p>
        </Card>
      ))}
    </Page>
  );
}
