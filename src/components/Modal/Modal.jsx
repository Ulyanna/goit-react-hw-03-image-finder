import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
const{largeImageURL,tags} = this.props
    return createPortal(
      <div className={css.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={css.modalContent}>
          <img className={css.modalImg} src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};