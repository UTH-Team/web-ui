import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../services/product.service";
import productReducer from "./slices/product.slice";

export const store = configureStore({
    reducer : {
        product: productReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    // Add middleware for API features like caching, invalidation, polling
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(productApi.middleware); // Add  middleware
    },
})


setupListeners(store.dispatch )