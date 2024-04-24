import { configureStore } from '@reduxjs/toolkit';
import paddingTopPage from './slices/paddingTopPage';
import headerComponent2 from './slices/headerComponent2';
import swap from './slices/swap.slices';

export const store = configureStore({
	reducer: {
		paddingTopPage,
		headerComponent2,
		swap
	},
});
