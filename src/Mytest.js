import { useState, useEffect } from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

const Mytest = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(`num=${num}`);
    return () => {
      console.log(`Cleaning up: num=${num}`);
    };
  }, [num]);

  const otherProps = {
    name: "Tom",
    age: 61,
  };

  return (
    <div>
      Mytest: {num}
      <div>
        <Button1 setNum={setNum} {...otherProps} />
        <Button2 setNum={setNum} />
      </div>
    </div>
  );
};

export default Mytest;
