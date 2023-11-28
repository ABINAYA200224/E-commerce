// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import Card from '../components/Card'

// function Api() {
//     const [datas,setDatas]=useState({})
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products').then((res)=>{
//      res.json()
//      .then((res)=>{
//      console.log(res);
//     setDatas(res)
//    })
//  })
//     },[])
    
//     // console.log(datas,"datas")
//   return (
//    <div>
// {/* if(datas){
//     <Card data={datas}/>

// } */}
//   {/* {datas.map((datas,index) =>{
//                return  <Card key={index} data={datas}/>
//             })} */}
   
//    </div>

//   )
// }

// export default Api