import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const AxiosFetch = () => {
  const [post, setpost] = useState({});
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
      .then((res) => {
        console.log(res);
        setpost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonId]);

  const handleClick = () => {
    setButtonId(id);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button onClick={handleClick}>click</button>
      <p>{post.title}</p>
    </div>
  );
};

export default AxiosFetch;
