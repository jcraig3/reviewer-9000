import type { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../../shopify.server";

export const action = async (args: ActionFunctionArgs) => {
  const { admin } = await authenticate.public.appProxy(args.request);
};
