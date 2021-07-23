import { useState } from "react";
import Modal from "../Modal/Modal";

function ImageGalleryItem({ src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <li className='ImageGalleryItem'>
      <img
        onClick={toggleModal}
        src={src}
        alt={alt}
        className='ImageGalleryItem-image'
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
      )}
    </li>
  );
}

export default ImageGalleryItem;
