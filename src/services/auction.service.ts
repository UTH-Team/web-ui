import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Auction } from '../types/AuctionType'; // Import your Auction type
import { RootState } from '@reduxjs/toolkit/query/react';

const auctionUrl = import.meta.env.VITE_AUCTION_BASE_URL


export const auctionApi = createApi({
    reducerPath: 'auctionApi', // Unique identifier for this API slice
    baseQuery: fetchBaseQuery({ 
        baseUrl: auctionUrl ,
        prepareHeaders: (headers) => {
        // Lấy token từ Redux state hoặc từ localStorage 
        const token = localStorage.getItem('token'); 
        // Nếu có token, thêm nó vào header
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
}), // Your API base URL
    // tagTypes: ['Auction'], // Define tag types for invalidation
    endpoints: (build) => ({


        getAuctions: build.query<Auction[], void>({
            query: () => '/all',
            // providesTags: ['Auction'], // Provides the 'Auction' tag
        }),

        getAuction: build.query<Auction, string>({

            query: (id) => `/auctions/${id}`,
            // providesTags: (result, error, id) => [{ type: 'Auction', id }], // Provides a tag for the specific auction
        }),


        placeBid: build.mutation<Auction, { auctionId: string; bidAmount: number; userId: string }>({

            query: ({ auctionId, bidAmount, userId }) => ({
                url: `/auctions/${auctionId}/bid?bidAmount=${bidAmount}&userId=${userId}`,
                method: 'PUT',

            }),
        //   /  invalidatesTags: (result, error, { auctionId }) => [{ type: 'Auction', id: auctionId }], // Invalidates the specific auction tag


        }),
        quickBuy: build.mutation<void, { auctionId: string; userId: string }>({

            query: ({ auctionId, userId }) => ({
                url: `/auctions/${auctionId}/quick-buy?userId=${userId}`,
                method: 'PUT',
            }),
            // invalidatesTags: (result, error, { auctionId }) => [{ type: 'Auction', id: auctionId }],
        }),




        createAuction: build.mutation<Auction, Partial<Auction>>({
            query: (auctionData) => ({
                url: '/auctions',
                method: 'POST',
                body: auctionData
            }),
            // invalidatesTags: ['Auction'] // Invalidates the 'Auction' tag to trigger re-fetch

        })




    }),

});


// Export hooks for usage in components
export const {
    useGetAuctionsQuery,
    useGetAuctionQuery,
    usePlaceBidMutation,
    useQuickBuyMutation,
    useCreateAuctionMutation


} = auctionApi;