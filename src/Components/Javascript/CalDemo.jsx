import { add, sub, mul, divide } from "./Calcultor";

export const CalDemo = () => {
  return (
    <div>
      <ul>
        <li>{add(1, 2)}</li>
        <li>{sub(4, 2)}</li>
        <li>{mul(3, 3)}</li>
        <li>{divide(5, 4)}</li>
      </ul>
    </div>
  );
};
