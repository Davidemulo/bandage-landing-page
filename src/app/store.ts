import { configureStore } from '@reduxjs/toolkit'

import { productsApi } from '../services/productsApi'
import shopReducer from './shopSlice'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,

    shop: shopReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
    ),
})

export type RootState =
  ReturnType<typeof store.getState>

export type AppDispatch =
  typeof store.dispatch