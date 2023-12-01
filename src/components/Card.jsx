import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  console.log(data, "ABIIIIIIIIIIIII");

  return (
    <div className="">
      <Link to={`/product/${data.id}`}>
        <div className="bg-white w-[200px] h-[200px] flex flex-col justify-center m-auto border-1 shadow shadow-black-800/20 hover:shadow-indigo-800/20 border-black-800 ">
          <img className="w-[115PX] h-[115px] m-auto" src={data.image} />
          {/* <h1>{data?.title}</h1> */}
          <h3 className="text-center bg-[#fefaef] overflow-hidden truncate w-200 text-[14px] pt-[5px] pb-[7px] pl-[3px]">
            {data?.title}
          </h3>
          <p className="text-left bg-[#f6f1ea]  hover:text-slate-800 text-[#999] pt-[5px] pb-[7px] pl-[10px] text-[15px]">₹
            {data?.price}
          </p>
          {/* <p>{data?.price}</p> */}
          {/* <p>{data?.description}</p> */}
        </div>
      </Link>
    </div>
  );
}

export default Card;
