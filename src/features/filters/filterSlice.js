const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	selectTags: [],
	search: "",
};

const filterSlice = createSlice({
	name: "video",
	initialState,
	reducers: {
		tagSelected: (state, action) => {
			state.selectTags.push(action.payload);
		},
		tagRemoved: (state, action) => {
			const indexToRemove = state.selectTags.indexOf(action.payload);

			if (indexToRemove !== -1) {
				state.selectTags.splice(indexToRemove, 1);
			}
		},
		searched: (state, action) => {
			state.search = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;
