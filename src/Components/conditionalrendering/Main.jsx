import Login from "./Login";

const Main = () => {


    let isLoggedIn = false;

    // const conditionalRendaring = () => {
    //     if (isLoggedIn === true) {
    //         return <h1>Welcome</h1>
    //     } else {
    //        return <Login />
    //     }
    // }

   

    return (
        <div>
            {/* {conditionalRendaring()} */}
            { isLoggedIn === true ? <h1>Welcome</h1> : <Login />}
        </div>
    );
};

export default Main;