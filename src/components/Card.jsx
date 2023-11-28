import React from "react";

function Card({ data }) {
  console.log(data, "ABIIIIIIIIIIIII");
  return (
    <div className="">
      <div className="bg-white w-[200px]  flex flex-col justify-center m-auto border-2 border-black-500">
        <img className="w-[150PX] h-[150px] m-auto" src={data.images} />
        {/* <h1>{data?.title}</h1> */}
        <h3 className="text-center bg-[#f6f1ea]">{data?.id}</h3>
        <p className="text-center">{data?.price}</p>
        {/* <p>{data?.price}</p> */}
        {/* <p>{data?.description}</p> */}
        
      </div>
    </div>
  );
}

export default Card;
