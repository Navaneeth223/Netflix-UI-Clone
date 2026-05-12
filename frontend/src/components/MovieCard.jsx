import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constants";

const MovieCard = ({ item }) => {
	return (
		<Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
			<div className='rounded-lg overflow-hidden'>
				<img
					src={SMALL_IMG_BASE_URL + item.backdrop_path}
					alt='Movie image'
					className='transition-transform duration-300 ease-in-out group-hover:scale-125'
				/>
			</div>
			<p className='mt-2 text-center'>{item.title || item.name}</p>
		</Link>
	);
};
export default MovieCard;
