import axios from "axios";
import { useEffect, useState } from "react";

const DataFromApiDisplayInUI = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    console.log(data[currentIndex].title);
  };
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
      setCurrentIndex(0);
    });

    // const intervalId = setInterval(() => {
    //   setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    // }, 3000); // Change the title every second
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <button onClick={buttonHandler}>Get post</button>

      {data.length > 0 ? (
        <h1>{data[currentIndex].title}</h1>
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};
export default DataFromApiDisplayInUI;
