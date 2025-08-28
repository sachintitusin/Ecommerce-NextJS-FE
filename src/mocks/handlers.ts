import { http, HttpResponse, delay } from "msw";

export const handlers = [
  // Absolute URL (browser may resolve this way)
http.get("http://localhost:3000/mock-api/products", async () => {
  return HttpResponse.json([
      {
        id: "ebb0f2f7-7bb2-4621-8668-66e10b66073f",
        name: "Printed Tee",
        slug: "printed-tee",
        description: "Premium cotton T-shirt with custom print",
        createdAt: "2025-08-28T05:36:07.715Z",
        updatedAt: "2025-08-28T05:36:07.715Z",
        deletedAt: null,
        variants: [
          {
            id: "f1c6f314-ca08-44ba-a6e9-ea6125d7b2f0",
            productId: "ebb0f2f7-7bb2-4621-8668-66e10b66073f",
            color: "Black",
            sizeId: "f61e4621-f342-4f73-910c-4963128ed6fc",
            price: 499,
            stock: 10,
            createdAt: "2025-08-28T05:36:07.715Z",
            updatedAt: "2025-08-28T05:36:07.715Z",
            images: [
              {
                id: "557d815e-c3ee-4306-a4bd-a4629b21c541",
                variantId: "f1c6f314-ca08-44ba-a6e9-ea6125d7b2f0",
                url: "/images/tee-black.png",
                sortOrder: 1,
              },
            ],
            size: {
              id: "f61e4621-f342-4f73-910c-4963128ed6fc",
              name: "S",
            },
          },
        ],
      },
      {
        id: "second-id",
        name: "Graphic Hoodie",
        slug: "graphic-hoodie",
        description: "Stylish hoodie with graphic print",
        createdAt: "2025-08-28T05:36:07.715Z",
        updatedAt: "2025-08-28T05:36:07.715Z",
        deletedAt: null,
        variants: [
          {
            id: "hoodie-variant-1",
            productId: "second-id",
            color: "Grey",
            sizeId: "size-id-2",
            price: 999,
            stock: 5,
            createdAt: "2025-08-28T05:36:07.715Z",
            updatedAt: "2025-08-28T05:36:07.715Z",
            images: [
              {
                id: "hoodie-img-1",
                variantId: "hoodie-variant-1",
                url: "/images/hoodie-grey.png",
                sortOrder: 1,
              },
            ],
            size: {
              id: "size-id-2",
              name: "M",
            },
          },
        ],
      },
    ]);
  }),

  // Relative URL (if RTK Query sends this way)
  http.get("/mock-api/products", () => {
    console.log("[MSW] Intercepted relative /mock-api/products");
    return HttpResponse.json([
      { id: "1", name: "Printed Tee", price: 499 },
      { id: "2", name: "Graphic Hoodie", price: 999 },
    ]);
  }),
];
