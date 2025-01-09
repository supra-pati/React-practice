import React from "react";
import { useState } from "react";
const countries = [
  { name: "India", value: "IN", cities: ["delhi", "mumbai"] },
  {
    name: "Unites States",
    value: "USA",
    cities: ["Los Angeles", "New York", "Chicago"],
  },
  {
    name: "United kingdom",
    value: "UK",
    cities: ["Cambridge", "Liverpool", "Manchester", "Bath"],
  },
];

const DropdownCity = () => {
  const [country, setCountry] = useState("");
  return (
    <div className="App">
      {/* 1st DropDown */}
      <select
        value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setCountry([e.target.value]);
          console.log(country);
        }}
      >
        {countries.map((item, index) => {
          return (
            <>
              <option value="">Select...</option>
              <option key={index} value={index}>
                {item.name}
              </option>
            </>
          );
        })}
      </select>

      {/* {JSON.stringify(countries[country])} */}

      {/* 2nd DropDown */}
      {countries[country] && (
        <select>
          {countries[country].cities.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default DropdownCity;
