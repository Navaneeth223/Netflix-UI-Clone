import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
	const [trendingContent, setTrendingContent] = useState(null);
	const { contentType } = useContentStore();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getTrendingContent = async () => {
			setIsLoading(true);
			const res = await axios.get(`/api/v1/${contentType}/trending`);
			setTrendingContent(res.data.content);
			setIsLoading(false);
		};

		getTrendingContent();
	}, [contentType]);

	return { trendingContent, isLoading };
};
export default useGetTrendingContent;
