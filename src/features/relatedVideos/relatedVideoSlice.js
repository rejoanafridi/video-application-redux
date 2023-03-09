// import { getRelatedVideos } from "./relatedVideosApi";

import { getRelatedVideos } from "./relatedVideoApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	relatedVideos: [],
	isLoading: false,
	isError: false,
	error: "",
};

// async thunk
export const fetchRelatedVideo = createAsyncThunk(
	"relatedVideos/fetchRelatedVideos",
	async ({ tags, id }) => {
		const relatedVideos = await getRelatedVideos({ tags, id });
		return relatedVideos;
	}
);

const relatedVideoSlice = createSlice({
	name: "relatedVideo",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchRelatedVideo.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchRelatedVideo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.relatedVideos = action.payload;
			})
			.addCase(fetchRelatedVideo.rejected, (state, action) => {
				state.isLoading = false;
				state.relatedVideos = [];
				state.isError = true;
				state.error = action.error?.message;
			});
	},
});

export default relatedVideoSlice.reducer;
