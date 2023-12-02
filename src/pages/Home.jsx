import React, { useState, useEffect, Link } from 'react';
import Card from '../components/Card';
// import Electronics from "./Electronics";
import Mensclothing from './MensClothing';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import Womensclothing from './WomensClothing';
import CardDetails from '../components/Card details';

function Home() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetch(' https://fakestoreapi.com/products').then((res) => {
      res.json().then((res) => {
        setDatas(res);

        console.log(res);
      });
    });
  }, []);

  return (
    <div className="max-sm:w-[600px] md:w-[1000px] lg:w-full">
      <div className="mt-[20px] max-sm:w-[700px] md:w-[1020px] lg:w-full">
        <img src="https://rajarathinam.netlify.app/image-banner.png" />
      </div>
      <div className=" m-auto w-[85%]  ">
        <div className=" max-sm:w-[650px] max-sm:gap-6 md:w-[900px] lg:w-full">
          <div>
            <div className="text-[40px] font-thin mt-[20px] text-left max-sm:text-center">
              Jewellery
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
                if (data.category === 'jewelery') {
                  console.log(data.image, 'id');
                  return <Card data={data} key={index} />;
                  // <Link to={`/product/id`}>

                  // </Link>
                }
              })}
          </div>
        </div>

        <div className="flex flex-col jastify-center mt-[40px]">
          <div className="text-[40px] font-thin mt-[20px] text-left max-sm:text-center">
            Jewellery
          </div>
          <div className="text-left max-sm:w-[650px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="flex gap-[20px] mt-[30px] max-sm:flex-col max-sm:w-[500px]">
          <div className="max-sm:w-[650px]">
            <img
              className="h-[450px]  max-sm:w-[600px]"
              src="https://rajarathinam.netlify.app/main-product_2.png"
            ></img>
          </div>
          <div className="grid grid-cols-3 gap-5 justify-center max-sm:grid-cols-2 max-sm:gap-x-[160px]">
            {datas &&
              datas?.map((data, index) => {
                if (data.category === 'electronics') {
                  console.log(data.image, 'id');
                  return <Card data={data} key={index} />;
                }
              })}
          </div>
        </div>

        <div className=" max-sm:w-[650px] max-sm:gap-6 md:w-[900px] lg:w-full">
          <div>
            <div className="text-[40px] font-thin mt-[20px] text-left max-sm:text-center">
              Men Clothing
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
                if (data.category === "men's clothing") {
                  console.log(data.image, 'id');
                  return <Card data={data} key={index} />;
                  // <Link to={`/product/id`}>

                  // </Link>
                }
              })}
          </div>
        </div>

        <div className="flex flex-col jastify-center mt-[40px]">
          <div className="text-[40px] font-thin mt-[20px] text-left max-sm:text-center">
            Women Clothing
          </div>
          <div className="text-left max-sm:w-[650px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="flex gap-[20px] mt-[30px] max-sm:flex-col max-sm:w-[500px]">
          <div className="max-sm:w-[650px]">
            <img
              className="h-[450px]  max-sm:w-[600px]"
              src="https://rajarathinam.netlify.app/main-product_2.png"
            ></img>
          </div>
          <div className="grid grid-cols-3 gap-5 justify-center max-sm:grid-cols-2 max-sm:gap-x-[160px]">
            {datas &&
              datas?.map((data, index) => {
                if (data.category === "women's clothing") {
                  console.log(data.image, 'id');
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
