import MyContext from "./MyContect";
import ThemedComponent from "./ThemedComponent";

const UseContextHook = () => {
  return (
    <>
      <MyContext.Provider value="dark">
        <ThemedComponent></ThemedComponent>
      </MyContext.Provider>

      <p>UseContextHook</p>
    </>
  );
};
export default UseContextHook;
