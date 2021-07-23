import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {
  return (
    <ul className='ImageGallery'>
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

export default ImageGallery;
