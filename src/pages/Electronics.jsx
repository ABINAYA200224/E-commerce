import React from 'react';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
function Electronics() {
  const [electronics, setelectronics] = useState();
  useEffect(() => {
    fetch(' https://fakestoreapi.com/products').then((res) => {
      res.json().then((res) => {
        setelectronics(res);
        console.log(res, 'electronics');
      });
    });
  }, []);
  return (
    <div className="max-sm:w-[700px] md:w-[1000px] lg:w-full">
      <div className="text-[44px] text-center">Electronics</div>
      <div className="text-[16px] justify-center text-center w-[auto] mx-[80px] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="flex gap-[20px] justify-center mt-[20px] max-sm:flex-wrap ">
        {electronics &&
          electronics?.map((electronics, index) => {
            if (electronics.category === 'electronics') {
              return <Card data={electronics} key={index} />;
            }
          })}
      </div>
    </div>
  );
}

export default Electronics;
