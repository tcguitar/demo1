//import Mytest from "./Mytest";
import React, { useState, lazy, Suspense } from "react";
import HomeContainer from "./containers/HomeContainer";
// import ShowDog from './components/ShowDog';
import { Loading } from './components/Loading';
import GetDog from './components/GetDog';

// TC: lazy, Suspense are just let you show loading screen if the component takes a long time to load.
//     Once is it loaded, the life cycle is just like regular component.
// const ShowDog = lazy(() => import('./components/ShowDog'));
// Once the component is load, it is loaded
// How to simulate slow lazy
// https://www.peterbe.com/plog/how-to-simulate-slow-lazy-chunk-loading-in-react
const ShowDog = lazy(() =>
  
  // simulate delay
  import("./components/ShowDog").then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module);
      }, 3000);
    });
  })

  //import("./components/ShowDog");
);
// const sleep = ms => new Promise(
//   resolve => setTimeout(resolve, ms)
// );

function App() {
  const fromApp = "App";
  const [age, setAge] = useState(61);
  const [car, setCar] = useState("Toyota Sienna");
  const [isShowDog, setIsShowDog] = useState(false);

  const HomeContainerProps = {
    name: "Tom",
    age: age,
    ssn: "123456789",
    car: car,
  };

  const handleClick = () => setIsShowDog(!isShowDog);

  return (
    <>
      {/* <Mytest /> */}
      <HomeContainer
        fromApp={fromApp}
        setAge={setAge}
        setCar={setCar}
        {...HomeContainerProps}
      />
      <div>
        <div>Show Dog? {JSON.stringify(isShowDog)}</div>
        <button
          onClick={()=>handleClick()}
        >Toggle Show Dog</button>
        <div>
          {isShowDog &&
          <Suspense fallback={Loading}>
            <ShowDog />
          </Suspense>
          }
        </div>
        <GetDog />
      </div>

    </>
  );
}

export default App;

// const ShowDog = async (event) => { 
//   await sleep(3000);
//   return (
//     <img alt="Puppy" src="https://cdn.glitch.com/a84f63e5-62cd-456b-89f4-c2adddc4e575%2Fpupper.jpeg?1552581003517" />
//   )
// }
/*
const SettingsApp = React.lazy(() =>
  import("./app").then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module as any);
      }, 10000);
    });
  })
);
*/