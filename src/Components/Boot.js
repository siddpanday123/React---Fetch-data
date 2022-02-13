import React, { useEffect, useState } from 'react';

const Boot = () => {
  const[data,setData] =useState([]);
  useEffect(()=>{
    fakedata()
  },[]);
  const  fakedata = async()=>{
    const responce = await fetch("http://fakeapi.jsonparseronline.com/categories")
    const datajshon = await responce.json()
    setData(datajshon);
    console.log(datajshon)
  }



  return (
   <div>
     <h2>hii plx reload</h2>
    {data.map((values)=>{
     return(
       <>
       <h1>my Id is {values.id} and my name is {values.name}</h1>
       </>
     )
    })}
  </div>
  );
};

export default Boot;
