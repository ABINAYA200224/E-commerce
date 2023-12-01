import React from "react";
// import CardDetails from "../components/Card details";
import Card from "../components/Card";
import { useState, useEffect } from "react";

function Jewelery() {
  const [jewelery, setjewelery] = useState();
  useEffect(() => {
    fetch(" https://fakestoreapi.com/products").then((res) => {
      res.json().then((res) => {
        setjewelery(res);
        console.log(res, "jewelery");
      });
    });
  }, []);
  return (
    <>
      <div className="text-[44px] text-center">Jewellery</div>
      <div className="text-[16px] justify-center text-center w-[auto] mx-[80px] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="flex  gap-[20px] justify-center mt-[20px] ">
        {jewelery &&
          jewelery?.map((jewelery, index) => {
            if (jewelery.category === "jewelery") {
              return <Card data={jewelery} key={index} />;
            }
          })}
      </div>
    </>
  );
}

export default Jewelery;
