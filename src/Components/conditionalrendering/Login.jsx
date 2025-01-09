import { useRef } from "react";
import Input from "./Input";
import './Login.css'

 const Login = () => {

const vref= useRef(null);

    return (
        <div>
            <form className="form">
                {/* <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input> */}
                <Input type="text" placeholder="Username"></Input>
                <Input type="password" placeholder="Password" ref={vref} ></Input>
                <button className="btn" type="submit" onClick={()=>vref.current.focus()}>Login</button>
            </form>            
        </div>
    );
};

export default Login;