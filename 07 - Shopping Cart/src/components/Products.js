import { products } from './App';
import { ProductCard } from './ProductCard';

export function Products({ setCartElArr, cartElArr }) {
  return (
    <main className="products">
      {products.map(product => (
        <ProductCard
          setCartElArr={setCartElArr}
          cartElArr={cartElArr}
          product={product}
          key={product.id}
        />
      ))}
    </main>
  );
}
