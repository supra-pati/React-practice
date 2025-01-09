import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* {item.name} - ${item.price} x {item.quantity} = ${item.totalPrice} */}
            {/* {`${item.name} :  qty- ${totalQuantity} & `} */}
            {`${item.name} :  qty- ${item.quantity} & `}
            {`total price- ${item.totalPrice}  `}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        <strong>Total Quantity:</strong> {`${totalQuantity} `}
      </div>
      <div>
        <strong>Total Price:</strong> ${totalPrice}
      </div>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
