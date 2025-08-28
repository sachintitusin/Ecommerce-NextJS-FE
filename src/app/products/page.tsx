"use client";

import { useGetProductsQuery } from "@/features/products/api";
import { ProductCard } from "@/features/products/components/ProductCard";
import ProductCardSkeleton from "@/features/products/components/ProductCardSkeleton";

export default function ProductsPage() {
  const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading) {
    return (
        <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Our Products</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i}/>
            ))}
        </div>
        </main>
    );
    }

  if (error) {
    return (
      <main className="p-6">
        <p className="text-red-600">Failed to load products. Please try again.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>

      <div
        className="
          grid 
          gap-6
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
        "
      >
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
