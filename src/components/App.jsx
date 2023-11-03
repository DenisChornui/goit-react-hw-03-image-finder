import { Component } from 'react';
import { fetchImg } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  async componentDidUpdate() {
    const { query, page } = this.state;

    try {
      const fetchedImg = await fetchImg(query, page);
      console.log(fetchedImg.hits);
      this.setState(prevState => ({
        images: [...prevState.images, ...fetchedImg.hits]
      }))
    } catch (error) {
      console.log('Error');
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <ImageGallery images={images} />
        <Button onClick={this.handleLoadMore}>Load More</Button>
      </div>
    );
  }
}
