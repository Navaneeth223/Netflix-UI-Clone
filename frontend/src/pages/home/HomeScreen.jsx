import Navbar from "../../components/Navbar";
import useGetTrendingContent from "../../hooks/useGetTrendingContent";
import { MOVIE_CATEGORIES, TV_CATEGORIES } from "../../utils/constants";
import { useContentStore } from "../../store/content";
import MovieSlider from "../../components/MovieSlider";
import HeroSection from "../../components/HeroSection";

const HomeScreen = () => {
	const { trendingContent, isLoading } = useGetTrendingContent();
	const { contentType } = useContentStore();

	if (isLoading)
		return (
			<div className='h-screen text-white relative'>
				<Navbar />
				<div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmmer' />
			</div>
		);

	return (
		<>
			<div className='relative h-screen text-white '>
				<Navbar />
				<HeroSection trendingContent={trendingContent} />
			</div>


			<div className='flex flex-col gap-10 bg-black py-10'>
				{contentType === "movie"
					? MOVIE_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)
					: TV_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)}
			</div>
		</>
	);
};
export default HomeScreen;
