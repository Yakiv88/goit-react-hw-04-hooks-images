import { useState } from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import s from './ImageGallery.module.css'
import PropTypes from 'prop-types'
import ImageError from '../ImageError/ImageError'

function ImageGallery({ images }) {
  const [showModal, setShowModal] = useState(false)
  const [modalImg, setModalImg] = useState('')

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const onImgClick = (img) => {
    // const { img } = e.target.dataset;
    setModalImg(img)
    toggleModal()
  }

  let imageListContent

  if (images) {
    imageListContent = (
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            largeImageURL={largeImageURL}
            key={id}
            previewImg={webformatURL}
            tags={tags}
            onToggleModal={toggleModal}
            showModal={showModal}
            onImgClick={onImgClick}
            modalImg={modalImg}
          />
        ))}
      </ul>
    )
  } else {
    ;<ImageError />
  }

  return <div>{imageListContent}</div>
}

ImageGallery.propTypes = {
  onImgClick: PropTypes.func,
  onToggleModal: PropTypes.func,
  showModal: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
}

export default ImageGallery
