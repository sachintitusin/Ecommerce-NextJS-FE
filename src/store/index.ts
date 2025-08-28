import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/cart/slice';
import { productsApi } from '@/features/products/api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // check the products/api and you'll see the api has a reducerPath key
    // it is "productsApi"
    [productsApi.reducerPath]: productsApi.reducer
  },
  /**
   * Middlewares stand between your dispatched actions and reducers.
   * For logging actions, handling asynchronous requests and all. RTK already
   * has a default middleware. But for RTK Query we need more of them. This
   * helps RTK query to cache, refetch, automatically poll or invalidate data.
   * @param getDefaultMiddleware 
   * @returns 
   */
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
});

/**
 * This is a helpful function in RTK Query. By default we can query and cache.
 * But to get features like refetch on reconnect or refetch on focus, you'll need
 * this function.
 */
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
