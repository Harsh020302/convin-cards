import {configureStore } from '@reduxjs/toolkit';
import { cardApi } from '../Services/CardApi.js';
import cardSlice from './cardSlice.js';
export const store = configureStore({
    reducer:{
        [cardApi.reducerPath] : cardApi.reducer,
        buttonClicked: cardSlice
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardApi.middleware),

});