import React, {FC} from "react";

type CounterPropsType = {
  count: number
  increment: () => void
}
const Counter: FC<CounterPropsType> = ({count, increment}) => {
  console.log("2");
  return <div>
    <span style={{paddingRight: "10px"}}>{count}</span>
    <button onClick={increment}>+</button>
  </div>;
};

export default React.memo(Counter);