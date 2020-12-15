import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Product from './Product.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    }
  }

componentDidMount() {
  const randomId = Math.floor(Math.random() * 1000000) + 9000000;
  const url = window.location.href.split('/');
  const end = url[url.length -1];
  const id = (isNaN(end) || end === '') ? randomId : end;

  axios.get(`/api/products/${id}`)
    .then(res => {
      const product = res.data[0];
      this.setState({
        product: product
      })
    })
  }

  render() {
    console.log(this.state.product);
    return (
      <div>
        <Product product={this.state.product} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('ProductInfoService'));