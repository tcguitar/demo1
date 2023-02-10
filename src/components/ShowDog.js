// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

// const myfetch = (url) => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((apiData) => {
//         // setData(apiData.message);
//         return apiData.message;
//     })
// }


const ShowDog = () => {
    // const [data, setData] = useState(null);
    // useEffect(()=>{
    //     axios.get(DOG_URL).then((resp) => {
    //         setData(resp.data.message);
    //     });
    // }, []);

    // const myfetch = (url) => {
    //         fetch(url)
    //         .then((response) => response.json())
    //         .then((apiData) => {
    //             setData(apiData.message);
    //             // return apiData.message;
    //     })
    // };

    // myfetch(DOG_URL);
        
    // setData(() => myfetch(DOG_URL));
    return <img alt="Puppy" width={500} src="https://cdn.glitch.com/a84f63e5-62cd-456b-89f4-c2adddc4e575%2Fpupper.jpeg?1552581003517" />;
    // return <img alt="Puppy" width={800} src={data} />
};

export default ShowDog;