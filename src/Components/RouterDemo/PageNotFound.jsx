import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const naviagate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      //  -1 means navigate to previous page
      naviagate(-1);
    }, 2000);
  }, []);
  return (
    <div>
      <h1>404 Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
