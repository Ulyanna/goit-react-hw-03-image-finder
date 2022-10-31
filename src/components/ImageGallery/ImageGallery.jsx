import React from 'react';
import PropTypes from 'prop-types';
import css from "../ImageGallery/ImageGallery.module.css"
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery =({hits}) => {
  return (
    <ul className={css.imageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
}


ImageGallery.propTypes = {
 hits: PropTypes.arrayOf(
   PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
};


  // openModal: PropTypes.func.isRequired,
