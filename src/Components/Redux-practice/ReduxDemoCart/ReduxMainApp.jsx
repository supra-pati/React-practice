import Cart from "./component/Cart";
import Login from "./component/Login";
import Purchase from "./component/Purchase";
import Total from "./component/Total";

const ReduxMainApp = () => {
  return (
    <>
      <h4>main redux</h4>
      <Login></Login>
      <Purchase></Purchase>
      <Cart></Cart>
      <Total></Total>
    </>
  );
};
export default ReduxMainApp;
