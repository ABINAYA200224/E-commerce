import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";

function Womensclothing({ data }) {
  const [womensCloth, setwomensCloth] = useState();
  useEffect(() => {
    fetch(" https://fakestoreapi.com/products").then((res) => {
      res.json().then((res) => {
        setwomensCloth(res);
        console.log(res, "womenscloth");
      });
    });
  }, []);
  return (
    <>
      <div className="text-[44px] justify-center text-center">
        {" "}
        women's Clothing
      </div>
      <div className="text-[16px] justify-center text-center w-[auto] mx-[80px] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="flex justify-center gap-[10px] mt-[20px]">
        {womensCloth &&
          womensCloth?.map((womensCloth, index) => {
            if (womensCloth.category === "women's clothing") {
              return <Card data={womensCloth} key={index} />;
            }
          })}
      </div>
    </>
  );
}

export default Womensclothing;
