import { getProducts, getCategories, getFinishes } from "@/lib/api/products";
import ProductsClient from "./products-client";

/**
 * Server component that fetches product data.
 * This is where the async data fetching happens, triggering Suspense.
 *
 * When integrating with a CMS:
 * - Data fetching happens here on the server
 * - Can use revalidation strategies (ISR, on-demand)
 * - Can implement caching with Next.js cache
 * - Reduces client bundle size
 */
export default async function ProductsServer() {
  // These async calls trigger Suspense in parent component
  const [products, categories, finishes] = await Promise.all([
    getProducts(),
    getCategories(),
    getFinishes(),
  ]);

  return (
    <ProductsClient
      initialProducts={products}
      categories={categories}
      finishes={finishes}
    />
  );
}
