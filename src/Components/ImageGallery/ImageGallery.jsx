import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onClick }) {
  return (
    <ul className='ImageGallery' onClick={onClick}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
