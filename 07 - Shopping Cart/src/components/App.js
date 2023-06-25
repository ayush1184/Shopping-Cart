import { useState } from 'react';
import { Cart } from './Cart';
import { Products } from './Products';

export const products = [
  {
    id: 1,
    title: `Striped Classic Tee`,
    description: `A timeless striped t-shirt for everyday wear.`,
    image: './product_images/t-shirt-1.jpg',
    price: 24.99,
  },
  {
    id: 2,
    title: `Graphic Oversized Tee`,
    description: `An t-shirt featuring a bold graphic print.`,
    image: './product_images/t-shirt-2.jpg',
    price: 29.99,
  },
  {
    id: 3,
    title: ` Vintage Washed Tee`,
    description: `A vintage-inspired v-neck †-shirt with a washed finish.`,
    image: './product_images/t-shirt-3.jpg',
    price: 23.99,
  },
  {
    id: 4,
    title: `Embroidered Pocket Tee`,
    description: `A tee with an embroidered logo on the pocket.`,
    image: './product_images/t-shirt-4.jpg',
    price: 34.99,
  },
  {
    id: 5,
    title: `Longline Scoop Neck Tee`,
    description: `A t-shirt with a flattering scoop neck design.`,
    image: './product_images/t-shirt-5.jpg',
    price: 27.99,
  },
  {
    id: 6,
    title: `Cropped Tie-Dye Tee`,
    description: `A trendy tie-dye tee with a cropped silhouette.`,
    image: './product_images/t-shirt-6.jpg',
    price: 29.99,
  },
];

export const sizeArr = [`XS`, `S`, `M`, `L`, `XL`];

// function createCartElArr(pos1, pos2, pos3, arr) {
//   const a = { ...arr[pos1], size: sizeArr[2], quantity: 1 };
//   const b = { ...arr[pos2], size: sizeArr[2], quantity: 1 };
//   const c = { ...arr[pos3], size: sizeArr[2], quantity: 1 };

//   return [a, b, c];
// }

// const initialCart = createCartElArr(2, 3, 5, products);

export default function App() {
  // const [products, setProducts] = useState(initialProducts);
  const [cartElArr, setCartElArr] = useState([]);
  const [couponCode, setCouponCode] = useState(``);
  const [discount, setDiscount] = useState(+couponCode.slice(-2));

  return (
    <div className="container">
      <Header />
      <section className="main-content">
        <Products setCartElArr={setCartElArr} cartElArr={cartElArr} />
        <Cart
          cartElArr={cartElArr}
          setCartElArr={setCartElArr}
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          discount={discount}
          setDiscount={setDiscount}
        />
      </section>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Nathan's Shirting</h1>
    </header>
  );
}
