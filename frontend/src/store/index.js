import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: [] },
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

export const { addToCart } = cartSlice.actions;
export const { addToWishlist } = wishlistSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer
  }
});
