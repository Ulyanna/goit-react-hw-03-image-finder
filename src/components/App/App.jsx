import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from "../Loader/Loader"
import axios from 'axios';

const PER_PAGE = 12; 

class App extends Component {
  
  state = {
    searchValue: null,
    hits: [],
    page: 1,
    error: null,
    loading: false,
  };

  async componentDidUpdate(_, PrevState) {
    const {searchValue, page} = this.state
    if (
      PrevState.searchValue !== searchValue ||
      PrevState.page !== page
    ) {
      this.setState({loading:true})
      try {
   await axios.get(
        `https://pixabay.com/api/?q=${searchValue}&page=1&key=29868967-3f3a0a798a8ddb286c18cf898&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&page=${page}`
      ).then(response => {this.setState(PrevState =>({hits: [...PrevState.hits, ...response.data.hits],loading: false})) })
      } catch (e) { return this.setState({error: e})
}
    }       
  }
  componentWillUnmount() {}

  formSubmitHandler = value => {
    this.setState({ searchValue: value, hits: [],page: 1 });
  };
  handleButtonLoadMore = () => {
    this.setState(PrevState => {
      return {
        page: PrevState.page + 1,
      };
    });
  };

  render() {
    const {loading, error, hits} =this.state
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {loading && <Loader />}
        {error && <h1>Not found</h1>}

        {hits && (
          <ImageGallery hits={hits}/>
        )}

        {hits.length > 0 && <Button onClick={this.handleButtonLoadMore} />}
      </>
    );
  }
}

export default App;


