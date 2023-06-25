import { useState } from 'react';
import { sizeArr } from './App';

export function ProductCard({ product, cartElArr, setCartElArr }) {
  const [productSize, setProductSize] = useState(sizeArr[0]);

  function addToCart() {
    const result = { ...product, quantity: 1, size: productSize };

    setCartElArr([...cartElArr, result]);
  }
  return (
    <div className="product">
      <div className="product-image-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <span className="product-price">$ {product.price}</span>
      </div>
      <div className="product-info">
        <h4 className="product-title">{product.title}</h4>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="product-options">
        <select
          className="size-option"
          value={productSize}
          onChange={e => setProductSize(e.target.value)}
        >
          {sizeArr.map(size => (
            <option value={size} key={size}>
              {size}
            </option>
          ))}
        </select>
        <button className="btn" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
