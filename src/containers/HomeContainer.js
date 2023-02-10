import React, { Fragment } from "react";
import HomeComponentNameAndAge from "../components/HomeComponentNameAndAge";

function HomeContainer({
  fromApp,
  name,
  age,
  setCar,
  setAge,
  ...restPropsFromApp
}) {
  const fromHomeContainer = "fromHomeContainer";

  return (
    <Fragment>
      <div>
        <h1>HomeContainer</h1>
        <div>{`name=${name}`}</div>
        <div>{`restPropsFromApp=${JSON.stringify(restPropsFromApp)}`}</div>
      </div>
      <HomeComponentNameAndAge
        fromApp={fromApp}
        fromHomeContainer={fromHomeContainer}
        name={name}
        age={age}
        setAge={setAge}
        setCar={setCar}
        {...restPropsFromApp}
      />
    </Fragment>
  );
}

export default HomeContainer;
