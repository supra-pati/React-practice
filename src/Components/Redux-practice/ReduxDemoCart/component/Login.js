import { useDispatch, useSelector } from "react-redux";
// import { LOGIN } from "../store/actions";
import { userLogin } from "../store/loginSlice";

const Login = () => {
  const users = useSelector((state) => state.ls.users);
  const dispatch = useDispatch();
  const LoginHandler = (e) => {
    let loginDet = e.target.options[e.target.selectedIndex].text;
    // dispatch({ type: LOGIN, payLoad: loginDet });
    dispatch(userLogin(loginDet));
  };

  return (
    <div className="customDiv">
      <h3>Login Component</h3>
      <hr></hr>
      <select onChange={(e) => LoginHandler(e)}>
        {users.map((user, index) => {
          return <option key={index}>{user} </option>;
        })}
      </select>
    </div>
  );
};
export default Login;
