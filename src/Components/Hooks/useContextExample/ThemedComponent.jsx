import { useContext } from "react";
import MyContext from "./MyContect";

const ThemedComponent = () => {
  const theme = useContext(MyContext); // Accessing the context value

  return (
    <div style={{ background: theme === "dark" ? "black" : "white" }}>
      <p>ThemedComponent</p>
    </div>
  );
};
export default ThemedComponent;
