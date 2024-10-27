import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetAllProductsResponse } from '../types/ProductType';
const baseUrl = import.meta.env.VITE_PRODUCT_BASE_URL

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            // Lấy token từ Redux state hoặc từ localStorage 
            const token = localStorage.getItem('token'); 
            // Nếu có token, thêm nó vào header
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (build) => ({
        getAllProduct: build.query<GetAllProductsResponse, void>({
            query: () => `products`
        }),
    }),
});

export const {
    useGetAllProductQuery
} = productApi;
