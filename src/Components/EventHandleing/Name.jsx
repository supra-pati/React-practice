import { useState } from 'react';
// import './page.css';



const Name = () => {

    const[name,setName] = useState("");
    const [headingText, setHeadingText] = useState("Hello");
    const [mouseOver, setmouseOver] = useState(false);
    const handler = () => {
        return setHeadingText(name);
    }
   
    const mousehandlerIn = () => {
        setmouseOver(true)

    }
    const mouseHandlerOut = () => {
        setmouseOver(false)

    }
    const nameHandler = (e)=>{
        setName(e.target.value)
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" value={name} onChange={nameHandler} />
            <button
                style={{ backgroundColor: mouseOver ? "black" : "white" }}
                onMouseOver={mousehandlerIn}
                onClick={handler}
                onMouseOut={mouseHandlerOut}
            >Submit</button>
        </div>
    );
};

export default Name;