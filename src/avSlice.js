import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.philips.com.eg%2Fc-p%2FNPX520_INT%2Fneopix-520-home-projector",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/10/04/21/58/speakers-971968_1280.png",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_1280.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/08/07/19/58/white-board-2607224_1280.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/21/15/13/work-harder-1845901_1280.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;
export default avSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
  },
});
