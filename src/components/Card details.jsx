import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function CardDetails() {
  const { id } = useParams();
  console.log(id, "iddddd");
  const [CardDetails, setCardDetails] = useState();
  console.log(CardDetails, "details");

  useEffect(() => {
    const Products = () => {
      fetch(`https://fakestoreapi.com/products/${id}`).then((res) => {
        res.json().then((res) => {
          setCardDetails(res);
          console.log(res, "hiiiiiiiiiiiiiiii");
          // .catch(error => console.error(error,"error"))
        });
      });
    };
    Products();
  }, [id]);
  console.log(CardDetails, "CardDetails");
  return (
    <div className="flex justify-center">
      <div className=" flex justify-center gap-[50px] mt-[50px] w-[70%] ">
        <div className=" flex justify-center w-[100%] h-[100%]">
          <img
            className=" w-[60%] m-auto"
            src={CardDetails && CardDetails?.image}
          />
        </div>
        <div className="flex justify-center flex-col gap-[1.5rem] w-[100%] h-[100%]">
          <div className="">
            <h2 className="text-[27px] font-bold">
              {CardDetails && CardDetails?.title}
            </h2>
          </div>
          <div className="w-[200px] border-[3px] border-[#a98b71] text-center rounded-[10px] pl-[1rem] pr-[1rem] pt-[5px] pb-[5px]">
            <p className="text-[16px]">
              {CardDetails && CardDetails?.category}
            </p>
          </div>

          <p className="color: rgb(169 139 113 / var(--tw-text-opacity)) text-[18px] text-[#a98b71] font-bold">
            Price:{CardDetails && CardDetails?.price}
          </p>
          <div className="flex gap-[50px]">
            <div className="text-[#a98b71] text-[16px] font-bold">
              rating:{CardDetails && CardDetails?.rating.rate}
            </div>
            <div className="text-[16px] text-[#a98b71] font-bold">
              count:{CardDetails && CardDetails?.rating.count}
            </div>
          </div>
          <div>
            <p className="text-[16px] text-[#a98b71] font-bold">
              product Description:
            </p>
            <p className="text-[#000] text-[16px] mt-[5px] ">
              {CardDetails && CardDetails?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
