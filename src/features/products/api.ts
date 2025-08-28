import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }), // relative!
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => '/mock-api/products', // relative path
    }),
    getProductById: builder.query<any, string>({
      query: (id) => `/mock-api/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
