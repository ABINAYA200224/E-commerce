import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
function Mensclothing({ data }) {
  const [mensCloth, setmensCloth] = useState();
  useEffect(() => {
    fetch(" https://fakestoreapi.com/products").then((res) => {
      res.json().then((res) => {
        setmensCloth(res);
        console.log(res, "menscloth");
      });
    });
  }, []);
  return (
    <>
      <div className="text-[44px] text-center"> Men's Clothing</div>
      <div className="text-[16px] justify-center text-center w-[auto] mx-[80px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="flex  gap-[20px] justify-center mt-[20px] ml-[40px]">
        {mensCloth &&
          mensCloth?.map((mensCloth, index) => {
            if (mensCloth.category === "men's clothing") {
              return <Card data={mensCloth} key={index} />;
            }
          })}
      </div>
    </>
  );
}

export default Mensclothing;
