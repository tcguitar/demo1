import React, { Fragment, useState } from "react";

function HomeComponentNameAndAge({
  fromApp,
  fromHomeContainer,
  name,
  age,
  setAge,
  setCar,
  ...restPropsFromApp
}) {
  const [myAge, setMyAge] = useState(0);
  const { ssn, car } = restPropsFromApp;
  // setAge(20);
  // setCar("VW");
  return (
    <Fragment>
      <div>
        <h3>HomeComponentNameAndAge</h3>
        <div>fromApp: {fromApp}</div>
        <div>fromHomeContainer: {fromHomeContainer}</div>
        <div>name: {name}</div>
        <div>age: {age}</div>
        <div>ssn: {ssn}</div>
        <div>car: {car}</div>
        <div>
          Age:{" "}
          <input
            type="number"
            placeholder="0"
            onChange={(e) => setMyAge(e.target.value)}
          />
        </div>
        <button onClick={() => setAge(myAge)}>Set Age</button>
      </div>
    </Fragment>
  );
}

export default HomeComponentNameAndAge;
