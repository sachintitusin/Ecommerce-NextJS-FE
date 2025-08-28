"use client";

import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/features/cart/slice";

interface Variant {
  id: string;
  price: number;
  images: { url: string }[];
  color?: string;
  size?: { name: string };
}

interface Product {
  id: string;
  name: string;
  variants: Variant[];
}

export function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const mainVariant = product.variants[0]; // 👈 show first variant for now

  const handleAddToCart = () => {
    dispatch(
      addItem({
        variantId: mainVariant.id,
        name: product.name,
        price: Number(mainVariant.price),
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex flex-col border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow bg-white">
      {/* Image */}
      <div className="w-full aspect-square mb-3">
        <img
          src={mainVariant.images[0]?.url || "/images/placeholder.png"}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">₹{mainVariant.price}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}
