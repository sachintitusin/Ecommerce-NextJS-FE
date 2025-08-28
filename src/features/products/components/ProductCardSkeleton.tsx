import React from 'react';

function ProductCardSkeleton() {
    return (
        <div className="flex flex-col border rounded-lg shadow-sm p-4 animate-pulse bg-white">
            <div className="w-full aspect-square mb-3 bg-gray-200 rounded-md" />
            <div className="h-4 bg-gray-200 rounded mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="mt-3 h-10 bg-gray-300 rounded-lg" />
        </div>
    );
}

export default ProductCardSkeleton;