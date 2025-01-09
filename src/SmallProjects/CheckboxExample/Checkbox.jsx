import { useState } from "react";

const Checkbox = () => {
  const [hobbies, setHobbies] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected hobbies:", hobbies);
  };

  const datashown = `Hobby = ${JSON.stringify(hobbies)}`;
  return (
    <div>
      Checkbox
      <div>
        <h2>React Form Example</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="checkbox"
              value="reading"
              checked={hobbies.includes("reading")}
              onChange={handleCheckboxChange}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              value="sports"
              checked={hobbies.includes("sports")}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              value="cooking"
              checked={hobbies.includes("cooking")}
              onChange={handleCheckboxChange}
            />
            Cooking
          </label>
          <button type="submit">Submit</button>
          <h3>{datashown}</h3>
        </form>
      </div>
    </div>
  );
};
export default Checkbox;
