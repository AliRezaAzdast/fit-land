import React from "react";

const NewProducts = () => {
  return (
    <section id="newproducts" className="mt-20">
      <div className="my-container">
        <div className="flex justify-between items-end gap-6">
          <div className="flex flex-col justify-end bg-[url(/img/newproducts/1.png)] w-45 md:w-[300px] lg:w-[392px] h-[225px] md:h-[462px] bg-center bg-cover rounded-2xl">
            <div className="flex flex-col justify-center bg-secondary-700 p-2 w-45 md:w-[300px] lg:w-[392px] h-[83px] md:h-[193px] new-product-clip rounded-2xl">
              <p className="text-white mt-8 text-[10px] md:text-lg">
                جدید ترین تخفیفات فصل برند پوما
              </p>
              <p className="text-white text-[10px] md:text-lg">
                <span className="text-primary-300">۵۰ ٪</span> تخفیف روی تمام
                محصولات{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end bg-[url(/img/newproducts/2.png)] w-45 md:w-[300px] lg:w-[392px] h-[225px] md:h-[462px] bg-center bg-cover rounded-2xl">
            <div className="flex flex-col justify-center bg-secondary-700 p-2 w-45 md:w-[300px] lg:w-[392px] h-[83px] md:h-[193px] new-product-clip rounded-2xl">
              <p className="text-white mt-8 text-[10px] md:text-lg">
                جدید ترین تخفیفات فصل برند پوما
              </p>
              <p className="text-white text-[10px] md:text-lg">
                <span className="text-primary-300">۵۰ ٪</span> تخفیف روی تمام
                محصولات{" "}
              </p>
            </div>
          </div>
          <div className="space-y-5 hidden lg:block">
            <h1 className="text-secondary text-2xl font-bold">جدید ترین محصولات</h1>
            <p className="text-[#606060] font-bold">
              جدید ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان
              درب منزل تحویل بگیرید
            </p>
            <button className="flex items-center justify-center bg-primary text-white py-3 px-6 rounded-lg w-full ">
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
      </div>
    </section>
  );
};

export default NewProducts;
