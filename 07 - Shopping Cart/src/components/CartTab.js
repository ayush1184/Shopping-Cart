export function CartTab({ el, cartElArr, setCartElArr }) {
  function removeProduct() {
    setCartElArr(cartElArr.filter(item => item.id !== el.id));
  }

  return (
    <div className="cart-tab">
      <div className="cart-tab-description">
        <h1 className="cart-tab-heading">{el.title}</h1>
        <p className="cart-tab-size">
          Size: {el.size} x {el.quantity}
        </p>
      </div>
      <div className="cart-tab-price">$ {el.price * el.quantity}</div>
      <div className="cart-tab-remove">
        <button className="btn" onClick={removeProduct}>
          Remove
        </button>
      </div>
    </div>
  );
}
