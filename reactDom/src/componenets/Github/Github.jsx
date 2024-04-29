import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  // const [data, setData] = useState([]);

  const data = useLoaderData();

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((res)=> res.json())
  //   .then((data)=> {
  //     console.log(data);
  //    setData(data)
  //   })
  //   .catch((error)=>console.log('eror'))
  //   console.log(fetch);

  // },[])


  return (
    <>
    <div className="text-center p-4  bg-gray-600 text-white text-3xl  "> Github followers: {data?.followers}
    <img src={data?.avatar_url} alt="" width={200} />
    <p>Name: {data.name}</p>
    
    </div>
      
    </>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/sofynaz')
  const data = response.json()
  // setData(data)
  return data;
}