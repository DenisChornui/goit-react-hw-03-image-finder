
import { Component } from 'react';
import { fetchImg } from './api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };


  async componentDidUpdate() {
    const {query, page} = this.state

    
  try {
    const fetchedImg = await fetchImg(query, page)
  console.log(fetchedImg.hits)
  } catch (error) {
    console.log('Error')
  }

}

render() {
  return (
    <div>
      
    </div>
  )
}
}