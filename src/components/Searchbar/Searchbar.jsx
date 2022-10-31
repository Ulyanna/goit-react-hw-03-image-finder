import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import css from "../Searchbar/Searchbar.module.css"

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handlerChange = event => {
    this.setState({
      value: event.currentTarget.value,
      page: 1,
    });
  };
  handlerOnSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      alert('Please enter something');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
    
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handlerOnSubmit}>
          <button className={css.searchFormBtn} type="submit">
            <FaSearch />
          </button>
          <input className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handlerChange}
          />
        </form>
      </header>
    );
  }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};