import { useDispatch, useSelector } from "react-redux";
import "../ReduxDemoStyle.css";
// import { PURCHASE } from "../store/actions";
import { purchase } from "../store/productSlice";

const Purchase = () => {
  const products = useSelector((state) => state.ps.products);
  const loginDet = useSelector((state) => state.ls.loginDet);
  const dispatch = useDispatch();
  const purchaseHandler = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let pobj = { pName, price };
    // dispatch({ type: PURCHASE, payLoad: pobj });
    dispatch(purchase(pobj));
    console.log("onchange handler");
  };
  return (
    <div className="customDiv">
      <h3>Purchase Component - {loginDet}</h3>
      <hr />
      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((product, index) => {
          return (
            <option value={product.price} key={index}>
              {product.pName} - ${product.price}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Purchase;
