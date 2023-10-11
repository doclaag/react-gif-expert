import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <div className="p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{category}</h3>

                {isLoading && <p className="text-lg font-bold text-gray-800">Loading...</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))}
                </div>

            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
