import React, { useState,useEffect } from 'react'

function Home() {
    const[jobs,setJobs]=useState()
    useEffect(() =>{
   
    fetch('https://fakestoreapi.com/products')
  
    .then((res)=>{
     res.json()
     .then((res)=>{
     console.log(res);
    setJobs(res)
   })

 })
},[])

  return (
    <>
     
  
    </>
   )
}

export default Home