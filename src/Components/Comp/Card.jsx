
const Card = (props) => {

    const space=')';


    return (
        <div>
            <h2>{props.ID} {space} {props.name}</h2>
            <p>{props.addr}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>

            {/* <div>
                <h2>{Person[1].name}</h2>
                <p>{Person[1].address}</p>
                <p>{Person[1].phone}</p>
                <p>{Person[1].email}</p>
            </div>

            <div>
                <h2>{Person[2].name}</h2>
                <p>{Person[2].address}</p>
                <p>{Person[2].phone}</p>
                <p>{Person[2].email}</p>
            </div> */}

        </div>

    );
};

export default Card;