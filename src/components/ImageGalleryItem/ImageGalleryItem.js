import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;
    return (
      <li >
        <img key={image.id} src={image.webformatURL} alt={image.tags} />
      </li>
    );
  }
}
