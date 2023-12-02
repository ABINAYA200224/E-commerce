import React from 'react';
import Card from '../components/Card';
import { useState, useEffect } from 'react';

function Womensclothing({ data }) {
  const [womensCloth, setwomensCloth] = useState();
  useEffect(() => {
    fetch(' https://fakestoreapi.com/products').then((res) => {
      res.json().then((res) => {
        setwomensCloth(res);
        console.log(res, 'womenscloth');
      });
    });
  }, []);
  return (
    <>
      <div className="max-sm:w-[700px] md:w-[1000px] lg:w-full">
        <div className="text-[44px] text-center">Women Clothing</div>
        <div className="text-[16px] justify-center text-center w-[auto] mx-[80px] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="flex gap-[20px] justify-center mt-[20px] max-sm:flex-wrap ">
          {womensCloth &&
            womensCloth?.map((womensCloth, index) => {
              if (womensCloth.category === "women's clothing") {
                return <Card data={womensCloth} key={index} />;
              }
            })}
        </div>
      </div>
    </>
  );
}

export default Womensclothing;
