import { Product } from "@/lib/types";

/**
 * Calculate similarity score between two products using weighted multi-factor approach
 *
 * Scoring breakdown:
 * - Category match: 40 points (most important - customers browsing marble want marble)
 * - Finish match: 30 points (visual consistency matters for tiles/stone)
 * - Price range: 20 points (within ±20% helps customers stay in budget)
 * - Random factor: 10 points (adds variety to recommendations)
 *
 * @param product - The current product being viewed
 * @param candidate - A potential similar product
 * @returns Similarity score (0-100)
 */
function calculateSimilarity(product: Product, candidate: Product): number {
  let score = 0;

  // Category match (40 points)
  if (product.category === candidate.category) {
    score += 40;
  }

  // Finish match (30 points)
  if (product.finish === candidate.finish) {
    score += 30;
  }

  // Price range match (20 points)
  // Within ±20% of original price
  const priceThreshold = 0.2;
  const priceDifference = Math.abs(product.price - candidate.price);
  const priceRange = product.price * priceThreshold;

  if (priceDifference <= priceRange) {
    // Scale points based on how close the price is
    const priceProximity = 1 - priceDifference / priceRange;
    score += 20 * priceProximity;
  }

  // Random factor (10 points) for variety
  score += Math.random() * 10;

  return score;
}

/**
 * Get similar products based on weighted scoring algorithm
 *
 * @param currentProduct - The product to find similar items for
 * @param allProducts - Complete product catalog
 * @param limit - Maximum number of similar products to return (default: 6)
 * @returns Array of similar products sorted by similarity score
 */
export function getSimilarProducts(
  currentProduct: Product,
  allProducts: Product[],
  limit: number = 6,
): Product[] {
  // Filter out the current product and calculate similarity scores
  const productsWithScores = allProducts
    .filter((p) => p.slug !== currentProduct.slug)
    .map((product) => ({
      product,
      score: calculateSimilarity(currentProduct, product),
    }));

  // Sort by score (highest first) and return top N products
  return productsWithScores
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.product);
}
