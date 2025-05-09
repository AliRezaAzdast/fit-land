import React from "react";

const Banner3 = () => {
  return (
    <section id="banner3">
      <div className="w-full h-50 md:h-100 lg:h-150 bg-cover bg-[url(./img/sections/green-bg-camp.jpg)] bg-center">
        <div className="my-container flex flex-col h-full justify-center gap-3">
          <p className="text-[10px] md:text-2xl text-white font-medium">
            برای لذت بردن از مسیر
          </p>
          <p className="text-[10px] md:text-2xl text-white font-bold mb-5">
            دوچرخه، اسکیت و اسکوتر بگیر
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
