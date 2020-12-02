import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from '../client/src/Product';

Enzyme.configure({ adapter: new Adapter() });

const product = {
  "name": "Kind Bars, Salted Caramel",
  "price": 5,
  "prime": true,
  "returnable": false,
  "flavor": 5,
  "ingredients": "Peanuts, almonds, chicory root fiber, cashews, pecans",
  "brand": "Kind",
  "sensitivity": "Gluten Free, Nut",
  "ingredient_info": "Protein 3 grams",
  "about": `Contains 12 - 1.4oz Bars Made with simple, whole ingredients With 5g of sugar, it's a satisfying, nutty snack that only seems indulgent. Gluten Free, no genetically modified ingredients, 0g Trans fat, Kosher Low glycemic index, low sodium, good source of fiber`,
  "Ratings_avg": 5
 }

describe('Product Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Product product={product}/>);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show name of product', () => {
    const wrapper = shallow(<Product product={product}/>);
    const name = wrapper.find('h1');
    expect(name.text()).toBe('Kind Bars, Salted Caramel');
  });
})