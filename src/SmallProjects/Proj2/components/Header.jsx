import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  const [header, setHeader] = useState(pathname);
  useEffect(() => {
    setHeader(pathname);
  }, [pathname]);

  return (
    <React.Fragment className="header">
      <Link to="/" className={header === "/" ? "active" : ""}>
        stopwatch
      </Link>

      <Link to="/timer" className={header === "/timer" ? "active" : ""}>
        Timer
      </Link>
    </React.Fragment>
  );
};
export default Header;
