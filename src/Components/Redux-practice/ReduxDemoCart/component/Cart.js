import { useDispatch, useSelector } from "react-redux";
// import { DELETE } from "../store/actions";
import "../ReduxDemoStyle.css";
import { deleteItem } from "../store/productSlice";
const Cart = () => {
  const cart = useSelector((state) => state.ps.cart);
  const loginDet = useSelector((state) => state.ls.loginDet);
  const dispatch = useDispatch();
  const deleteHandler = (index, price) => {
    // dispatch({ type: DELETE, payLoad: { index, price } });
    dispatch(deleteItem({ index, price }));
  };
  return (
    <div className="customDiv">
      <h3>Cart Component - {loginDet}</h3>
      <hr />
      <ul>
        {cart.map((product, index) => {
          return (
            <li key={index} onClick={() => deleteHandler(index, product.price)}>
              {product.pName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cart;
