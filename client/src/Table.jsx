import React from 'react';

const Table = ({product}) => {
  return (
    <table>
      <tr>
        <td><b>Flavor</b></td>
        <td>{product.flavor}</td>
      </tr>
      <tr>
        <td><b>Ingredients</b></td>
        <td>{product.ingredients}</td>
      </tr>
      <tr>
        <td><b>Brand</b></td>
        <td>{product.brand}</td>
      </tr>
      <tr>
        <td><b>Sensitive</b></td>
        <td>{product.sensitivity}</td>
      </tr>
      <tr>
        <td><b>Ingredient Information</b></td>
        <td>{product.ingredient_info}</td>
      </tr>
    </table>
  )
}

export default Table;
