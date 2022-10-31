import React from 'react';
import css from "../Button/Button.module.css"
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};