import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <li key={image.id}>
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    );
  }
}
