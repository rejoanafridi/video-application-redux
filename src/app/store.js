import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import relatedVideoReducer from "../features/relatedVideos/relatedVideoSlice";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
	reducer: {
		videos: videosReducer,
		tags: tagsReducer,
		video: videoReducer,
		relatedVideos: relatedVideoReducer,
		filter: filterReducer,
	},
});
