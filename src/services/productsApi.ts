import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import type {
  ProductsResponse,
} from '../types/product'

export const productsApi = createApi({
  reducerPath: 'productsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductsResponse,
      {
        limit: number
        skip: number
      }
    >({
      query: ({ limit, skip }) => ({
        url: 'products',
        params: {
          limit,
          skip,
        },
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
} = productsApi