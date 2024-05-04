import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showChart: false,
};

const swapSlices = createSlice({
	name: 'swapslices',
	initialState,
	reducers: {
		toggleSlice: (state) => {
			state.showChart = !state.showChart;
		},
		close: (state) => {
			state.showChart = false;
		}
	},
});

export const { toggleSlice, close } = swapSlices.actions;
export default swapSlices.reducer;
export const getShowChart = (state) => state.swap.showChart;
