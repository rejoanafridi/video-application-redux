import { useDispatch, useSelector } from "react-redux";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useEffect } from "react";
import Loading from "../ui/Loading";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideoSlice";

export default function RelatedVideoList({ currentVideoId, tags }) {
	console.log(currentVideoId);

	const dispatch = useDispatch();
	const { relatedVideos, isLoading, error, isError } = useSelector(
		(state) => state.relatedVideos
	);
	useEffect(() => {
		dispatch(fetchRelatedVideo({tags, id: currentVideoId}));
	}, [dispatch, tags, currentVideoId]);

	// decide what to do
	let content = null;

	if (isLoading) content = <Loading />;
	if (!isLoading && isError)
		content = <div className="col-span-12">{error}</div>;

	if (!isError && !isLoading && relatedVideos?.length === 0)
		content = <div className="col-span-12">No related videos found</div>;
	if (!isError && !isLoading && relatedVideos?.length > 0) {
		content = relatedVideos.map((video) => (
			<RelatedVideoListItem key={video.id} video={video} />
		));
	}

	return (
		<div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
			{content}
		</div>
	);
}
