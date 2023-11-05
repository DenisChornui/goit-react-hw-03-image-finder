import { Component } from 'react';
import { fetchImg } from 'components/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { SearchBar } from './Searchbar/SearchBar';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        const fetchedImg = await fetchImg(query, page);
        console.log(fetchedImg.hits);
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImg.hits],
        }));
      } catch (error) {
        console.log('Error');
      }
    }
  }

  handleFormSubmit = value => {
    const { query } = this.state;

    if (query === value) {
      return;
    }
    this.setState({
      query: value,
      images: [],
      page: 1,
      // error: false,
      // loadMore: false,
    });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ImageGallery images={images} />
        <Button onClick={this.handleLoadMore}>Load More</Button>
      </div>
    );
  }
}
