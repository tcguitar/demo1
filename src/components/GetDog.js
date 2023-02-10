import React, { useEffect, useState } from 'react';
import axios from 'axios';
const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

// const myfetch = (url) => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((apiData) => {
//         // setData(apiData.message);
//         return apiData.message;
//     })
// }

// const fetchDog = (url) => {
//     axios.get(url)
//     .then((resp) => {
//         return resp.data.message;
//     });
// };

const GetDog = () => {
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetchDog(DOG_URL);
    }, []);
        
    const fetchDog = (url) => {
        axios.get(url)
        .then((resp) => {
            // console.log(resp.data.message);
            setData(resp.data.message);
        });
    };

    // const fetchDog2 = (url) => {
    //     return axios.get(url)
    //     .then((resp) => {
    //         return resp.data.message
    //     });
    // };

  async function fetchDog2 (url) {
    const response = await axios.get(url)
    return response.data.message;
  };

    // const handleClick = () => {
    //     fetchDog(DOG_URL);
    //     console.log(testFunc(100));
    // }

    const handleClick2 = async (url) => {
        console.log("Before getting dogurl!!");
        const dogurl =  await fetchDog2(url); //Need to wait for an asnyc function fetchDog2 to finish and reture value
        // console.log("After getting dogurl");
        console.log('dogurl=', dogurl);
        setData(dogurl);
    }

    // const testFunc = (num) => {
    //     return num;
    // }

    return (
        <div>
            <button
                onClick={() => handleClick2(DOG_URL)}>
            Fetch Dog
            </button>
            <div>
                <img alt="Puppy" width={800} src={data} />
            </div>
        </div>
    )
};

export default GetDog;