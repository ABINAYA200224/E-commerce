import React, { useState, useEffect, Link } from "react";
import Card from "../components/Card";
// import Electronics from "./Electronics";
import Mensclothing from "./MensClothing";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import Womensclothing from "./WomensClothing";
import CardDetails from "../components/Card details";

function Home() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetch(" https://fakestoreapi.com/products").then((res) => {
      res.json().then((res) => {
        setDatas(res);

        console.log(res);
      });
    });
  }, []);

  return (
    <div>
      <div className="mt-[20px]">
        <img src="https://rajarathinam.netlify.app/image-banner.png" />
      </div>
      <div className=" m-auto w-[85%]">
        <div>
          <div>
            <div className="text-[40px] font-thin mt-[20px] text-left">
              Jewelery
            </div>
            <div className="text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="flex  gap-[20px] flex-wrap justify-left mt-[20px]">
            {datas &&
              datas?.map((data, index) => {
                if (data.category === "jewelery") {
                  console.log(data.image, "id");
                  return <Card data={data} key={index} />;
                  // <Link to={`/product/id`}>

                  // </Link>
                }
              })}
          </div>
        </div>

        <div className="flex flex-col jastify-center mt-[40px]">
          <div className="text-[40px] font-thin text-left">Electronics</div>
          <div className="text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="flex gap-[20px] mt-[30px]">
          <div>
            <img
              className="h-[422px] w-[434px] "
              src="https://rajarathinam.netlify.app/main-product_2.png"
            ></img>
          </div>
          <div className="grid grid-cols-3 flex-wrap gap-[20px] justify-center ">
            {datas &&
              datas?.map((data, index) => {
                if (data.category === "electronics") {
                  console.log(data.image, "id");
                  return <Card data={data} key={index} />;
                }
              })}
          </div>
        </div>

        <div>
          <div>
            <div className="text-[40px] font-thin mt-[40px] text-left">
              Men's Clothing
            </div>
            <div className="text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="flex gap-[20px] flex-wrap justify-left mt-[20px] ">
            {datas &&
              datas?.map((data, index) => {
                if (data.category === "men's clothing") {
                  console.log(data.image, "id");
                  return <Card data={data} key={index} />;
                }
              })}
          </div>
        </div>

        <div className="text-[40px] font-thin mt-[40px] text-left ">
          Women's Clothing
        </div>
        <div className="text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="flex gap-[20px]">
          <div>
            <img
              className="w-[422px] h-[434px] mt-[42px]"
              src="https://rajarathinam.netlify.app/main-product_2.png"
            ></img>
          </div>
          <div className="grid grid-cols-3 flex-wrap  grid-rows-3 gap-[20px] justify-center mt-[50px]">
            {datas &&
              datas?.map((data, index) => {
                if (data.category === "women's clothing") {
                  console.log(data.image, "id");
                  return <Card data={data} key={index} />;
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
