import React from "react";

const Banner1 = () => {
  return (
    <section>
      <div className="w-full h-50 md:h-100 lg:h-150 bg-cover bg-[url(./img/sections/girl-pink-bg.jpg)] bg-center">
        <div className="my-container flex flex-col h-full justify-center gap-3">
            <p className="text-[10px] md:text-2xl text-secondary-900 font-medium">برای حال خوب</p>
            <p className="text-[10px] md:text-2xl text-secondary-900 font-bold mb-5">وازم ایروبیک و تناسب اندام بگیر</p>
            <button className="hidden md:flex items-center justify-center bg-secondary w-fit cursor-pointer text-white py-3 px-6 rounded-lg">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z"
                  fill="white"
                />
                <path
                  d="M16 12.75H10C9.59 12.75 9.25 12.41 9.25 12C9.25 11.59 9.59 11.25 10 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                  fill="white"
                />
                <path
                  d="M11.9975 15.7504C11.8075 15.7504 11.6175 15.6804 11.4675 15.5304L8.4675 12.5304C8.1775 12.2404 8.1775 11.7604 8.4675 11.4704L11.4675 8.47043C11.7575 8.18043 12.2375 8.18043 12.5275 8.47043C12.8175 8.76043 12.8175 9.24043 12.5275 9.53043L10.0575 12.0004L12.5275 14.4704C12.8175 14.7604 12.8175 15.2404 12.5275 15.5304C12.3775 15.6804 12.1875 15.7504 11.9975 15.7504Z"
                  fill="white"
                />
              </svg>
              <span>مشاهده همه محصولات</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
