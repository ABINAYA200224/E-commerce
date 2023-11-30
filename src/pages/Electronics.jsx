import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";
function Electronics() {
  const [electronics, setelectronics] = useState();
  useEffect(() => {
    fetch(" https://fakestoreapi.com/products").then((res) => {
      res.json().then((res) => {
        setelectronics(res);
        console.log(res, "electronics");
      });
    });
  }, []);
  return (
    <div className="flex flex-col jastify-center text-center">
      <div className="text-[44px] text-center">Electronics</div>
      <div className="text-[16px] justify-center text-center w-[auto] mx-[50px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="w-[100%] m-auto">
        <div className="flex gap-[10px] mt-[20px] ml-[15px] w-[70%]">
          {electronics &&
            electronics?.map((electronics, index) => {
              if (electronics.category === "electronics") {
                return <Card data={electronics} key={index} />;
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default Electronics;
