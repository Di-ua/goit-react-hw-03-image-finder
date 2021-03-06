import React from 'react';
import styles from './ImageGalleryItem.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  handleBigImg,
}) => {
  const name = tags.split(',')[0];
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => handleBigImg(largeImageURL)}
    >
      <img
        src={webformatURL}
        alt={name}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleBigImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;