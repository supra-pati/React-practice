import React from "react";
import Cars from "./Cars";

// console.log(Cars);

const [honda, tesla] = Cars;
// console.log(tesla);
const { coloursByPopularity: [teslaTopColour] } = tesla;
const { coloursByPopularity: [hondaTopColour] } = honda;
// console.log(teslaTopColour);
const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

const CarTable = () => {
    return (
        <React.Fragment>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Top Speed</th>
                        <th>Top Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{tesla.model}</td>
                        <td>{teslaTopSpeed}</td>
                        <td>{teslaTopColour}</td>
                    </tr>
                    <tr>
                        <td>{honda.model}</td>
                        <td>{hondaTopSpeed}</td>
                        <td>{hondaTopColour}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default CarTable;