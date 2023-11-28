import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Electronics from "./Electronics";

function Home() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products").then((res) => {
      res.json().then((res) => {
        setDatas(res);
        console.log(res);
      });
    });
  }, []);

  return (
    <>
      <img src="https://rajarathinam.netlify.app/image-banner.png" />
      <Electronics />
      <div className="flex justify-around">
        <div>
          <img className="w-[422px] h-[434px] mt-[42px]" src="https://rajarathinam.netlify.app/main-product_2.png"></img>
        </div>
        <div className="grid grid-cols-3  grid-rows-3 gap-[10px] justify-center mt-[50px]">
          {datas &&
            datas?.map((data, index) => {
              if (data.category.name === "Electronics") {
                console.log(data.image, "id");
                return <Card data={data} key={index} />;
              }
            })}



           {/*       
           {datas&&datas?.map((data)=>{
           console.log("R2:data",data)
           return <Card data={data}/>
           })} */}
        </div>
      </div>
      <div className="grid grid-cols-3  grid-rows-3 gap-[10px] justify-center mt-[50px]">
      {datas &&
            datas?.map((data, index) => {
              if (data.category.name === "Clothes") {
                console.log(data.image, "id");
                return <Card data={data} key={index} />;
              }
            })}
       </div>

    </>
  );
}

export default Home;
