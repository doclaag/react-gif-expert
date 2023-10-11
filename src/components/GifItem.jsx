import PropTypes from "prop-types";



export const GifItem = ({ title, url }) => {

    // console.log(title, url)

    return (
        <div className="bg-white rounded-lg shadow-md">
      <div className="aspect-w-16 aspect-h-9">
        <img src={url} alt={title} className="object-cover w-full h-auto rounded-lg" />
      </div>
      <p className="text-center mt-4 font-semibold text-gray-800">{title}</p>
    </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
