import { useSelector } from "react-redux";
import "../ReduxDemoStyle.css";

const Total = () => {
  const total = useSelector((state) => state.ps.total);
  const loginDet = useSelector((state) => state.ls.loginDet);
  return (
    <div className="customDiv">
      <h3>Total Component - {loginDet}</h3>
      <hr />
      <h2>Total : {total}</h2>
    </div>
  );
};
export default Total;
