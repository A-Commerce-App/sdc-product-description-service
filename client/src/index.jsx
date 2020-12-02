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
    let id = Math.floor(Math.random() * 100) + 1;
    // let url = window.location.pathname.split('/');
    // let id = url.join('');
    axios.get(`/api/products/${id}`)
      .then(res => {
        const product = res.data;
        this.setState({
          product: product
        })
      })
  }

  render() {
    return (
      <div>
        <Product product={this.state.product} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('ProductInfoService'));