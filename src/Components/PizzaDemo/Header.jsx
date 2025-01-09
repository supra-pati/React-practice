import "./Header.css";

function Header() {
  //   const styleH = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const styleH = {};
  return (
    <header>
      <h1 className="header" style={styleH}>
        Fast React App Demo
      </h1>
    </header>
  );
}

export default Header;
