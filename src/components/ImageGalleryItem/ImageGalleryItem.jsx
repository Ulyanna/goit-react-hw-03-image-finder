import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleShowModale = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    const { webformatURL,tags,largeImageURL } = this.props;
    return (
      <>
         <li className={css.imageGalleryItem}>
              <img className={css.imageGalleryItemImage}
                src={webformatURL}
                alt={tags}
                onClick={this.toggleShowModale}
              />
            </li>
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleShowModale}
          />
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
 
};
