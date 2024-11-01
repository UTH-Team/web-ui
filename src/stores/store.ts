import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../services/product.service";
import { auctionApi } from "../services/auction.service"; // Import auctionApi
import productReducer from "./slices/product.slice";
import auctionReducer from "./slices/auction.slice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        auction: auctionReducer,
        [productApi.reducerPath]: productApi.reducer,
        [auctionApi.reducerPath]: auctionApi.reducer, // Add auctionApi reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(auctionApi.middleware); // Add auctionApi middleware
    },
});

setupListeners(store.dispatch);