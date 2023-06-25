import { CartTab } from './CartTab';

export function Cart({
  couponCode,
  setCouponCode,
  discount,
  setDiscount,
  cartElArr,
  setCartElArr,
}) {
  const cartAmount = cartElArr.reduce((curr, el) => curr + el.price, 0);

  function discountApply(e) {
    e.preventDefault();

    if (couponCode === `REACT_COURSE`) {
      setDiscount(99);
      setCouponCode(``);
      return;
    }

    if (
      couponCode.includes(`DISCOUNT`) &&
      +couponCode.slice(-2) >= 10 &&
      +couponCode.slice(-2) <= 99 &&
      Number.isFinite(+couponCode.slice(-2))
    ) {
      setDiscount(couponCode.slice(-2));
      setCouponCode(``);
    } else {
      alert(`Invalid Coupon Code...`);
    }
  }

  function resetCart() {
    setCartElArr([]);
  }

  return (
    <section className="cart">
      <div className="cart-header">
        <h1 className="cart-heading">Shopping Cart</h1>
        <p className="cart-description">
          {cartElArr.length} shirts in the cart
        </p>
      </div>
      {cartElArr.length ? (
        <div className="cart-content">
          {cartElArr.map(cartEl => (
            <CartTab
              cartElArr={cartElArr}
              setCartElArr={setCartElArr}
              el={cartEl}
              key={cartEl.id}
            />
          ))}
        </div>
      ) : (
        ``
      )}
      <div className="cart-summary">
        <h1 className="cart-summary-heading">Total:</h1>
        <h1 className="cart-summary-amount">
          $ {((cartAmount * (100 - discount)) / 100).toFixed(2)}
        </h1>
      </div>

      {cartElArr.length ? (
        <>
          <div className="discount">
            <p
              style={{
                color: `rgba(65, 65, 65)`,
                textDecoration: `line-through`,
              }}
            >
              $ {cartAmount}
            </p>
            <p className="discount-percentage">{discount}% OFF</p>
            <p className="discount-description">
              <span className="coupon-code">
                {`${couponCode}` || `DISCOUNT${discount}`}{' '}
              </span>{' '}
              &nbsp;is applied
            </p>
            <form className="discount-form" onSubmit={discountApply}>
              <input
                type="text"
                placeholder="Enter your coupon code..."
                value={couponCode}
                onChange={e => setCouponCode(e.target.value)}
              />
              <button className="btn" type="Submit">
                Submit
              </button>
            </form>
          </div>
          <button className="btn remove-btn" onClick={resetCart}>
            Remove All
          </button>
        </>
      ) : (
        ``
      )}
    </section>
  );
}
