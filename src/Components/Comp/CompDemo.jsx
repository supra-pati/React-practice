import Email from "./Email";

const CompDemo = (props) => {
    return (
        <div>            
            <li>{props.item} - It's price-{props.price}</li>
            <Email id={props.emailID} />
            {/* <img src={props.img} alt={props.item}></img> */}
        </div>
    );
};

export default CompDemo;