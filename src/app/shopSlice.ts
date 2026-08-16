import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { Product } from '../types/product'

type ShopState = {
  cart: Product[]
  wishlist: Product[]
  basketModalProduct: Product | null
}

const initialState: ShopState = {
  cart: [],
  wishlist: [],
  basketModalProduct: null,
}

const shopSlice = createSlice({
  name: 'shop',

  initialState,

  reducers: {
    addToBasket: (
      state,
      action: PayloadAction<Product>,
    ) => {
      state.cart.push(action.payload)

      state.basketModalProduct = action.payload
    },

    toggleWishlist: (
      state,
      action: PayloadAction<Product>,
    ) => {
      const productId = action.payload.id

      const existingIndex =
        state.wishlist.findIndex(
          (product) => product.id === productId,
        )

      if (existingIndex !== -1) {
        state.wishlist.splice(existingIndex, 1)
      } else {
        state.wishlist.push(action.payload)
      }
    },

    closeBasketModal: (state) => {
      state.basketModalProduct = null
    },
  },
})

export const {
  addToBasket,
  toggleWishlist,
  closeBasketModal,
} = shopSlice.actions

export default shopSlice.reducer