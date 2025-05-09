import React from "react";

const NewProducts2 = () => {
  return (
    <section id="newproduct2" className="mt-20">
      <div className="my-container">
        {/* titile */}
        <div className="flex justify-center">
          <h3 className="text-sm md:text-[32px] font-bold bg-white rounded-2xl p-2 md:p-4 -mt-10 md:-mt-15">
            جدید ترین کفش های ورزشی
          </h3>
        </div>
        {/* show all buttom */}
        <div className="hidden md:flex justify-end mb-2">
          <button className="flex items-center justify-center text-secondary w-fit gap-3 font-bold">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 23.582C6.07 23.582 1.25 18.762 1.25 12.832C1.25 6.90203 6.07 2.08203 12 2.08203C17.93 2.08203 22.75 6.90203 22.75 12.832C22.75 18.762 17.93 23.582 12 23.582ZM12 3.58203C6.9 3.58203 2.75 7.73203 2.75 12.832C2.75 17.932 6.9 22.082 12 22.082C17.1 22.082 21.25 17.932 21.25 12.832C21.25 7.73203 17.1 3.58203 12 3.58203Z"
                fill="#032340"
              />
              <path
                d="M15.5 13.582H9.5C9.09 13.582 8.75 13.242 8.75 12.832C8.75 12.422 9.09 12.082 9.5 12.082H15.5C15.91 12.082 16.25 12.422 16.25 12.832C16.25 13.242 15.91 13.582 15.5 13.582Z"
                fill="#032340"
              />
              <path
                d="M11.4975 16.5825C11.3075 16.5825 11.1175 16.5125 10.9675 16.3625L7.9675 13.3625C7.6775 13.0725 7.6775 12.5925 7.9675 12.3025L10.9675 9.30246C11.2575 9.01246 11.7375 9.01246 12.0275 9.30246C12.3175 9.59246 12.3175 10.0725 12.0275 10.3625L9.5575 12.8325L12.0275 15.3025C12.3175 15.5925 12.3175 16.0725 12.0275 16.3625C11.8775 16.5125 11.6875 16.5825 11.4975 16.5825Z"
                fill="#032340"
              />
            </svg>

            <span>مشاهده همه</span>
          </button>
        </div>
        {/* cards */}
        <div className="flex justify-between items-center gap-5 pb-8 mt-5">
          <svg
            className="hidden md:block cursor-pointer"
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0813 5.29711C13.3346 5.29893 13.5872 5.39407 13.7858 5.59551L22.4165 14.351C23.8196 15.7745 23.803 18.0944 22.3795 19.4976L13.624 28.1283C13.2346 28.5121 12.5946 28.5075 12.2107 28.1181C11.8268 27.7287 11.8314 27.0887 12.2209 26.7048L20.9764 18.0741C21.621 17.4387 21.6284 16.3988 20.993 15.7542L12.3623 6.99866C11.9785 6.60922 11.9831 5.96924 12.3725 5.58536C12.5738 5.40013 12.8279 5.29529 13.0813 5.29711Z"
              fill="#021526"
            />
          </svg>

          <div className="flex flex-col items-center bg-white w-fit border border-[#cbcbcb]  rounded-2xl">
            <img
              src="/img/off/4.png"
              className="rounded-t-2xl h-70 w-[366px]"
              alt=""
            />
            <div className="flex flex-col justify-start items-start w-full p-6">
              <p className="text-secondary-900 font-semibold mb-3">
                سویشرت نایک مدل AO-14
              </p>
              <p className="text-sm mb-2 font-medium">۳۰۰,۰۰۰ تومان</p>
              <p className="text-xs text-[#404040] mb-3">از سایز L تا XXL</p>
              <div className="flex w-full relative">
                <span className="block w-5 h-5 bg-black rounded-full z-20"></span>
                <span className="block w-5 h-5 bg-[#cbcbcb] rounded-full -mr-2 z-10"></span>
                <span className="block w-5 h-5 bg-secondary-900 rounded-full -mr-2"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white w-fit border border-[#cbcbcb]  rounded-2xl">
            <img
              src="/img/off/5.png"
              className="rounded-t-2xl h-70 w-[366px]"
              alt=""
            />
            <div className="flex flex-col justify-start items-start w-full p-6">
              <p className="text-secondary-900 font-semibold mb-3">
                ست نایک مدل S-2000
              </p>
              <p className="text-sm mb-2 font-medium">۲۰۰,۰۰۰ تومان</p>
              <p className="text-xs text-[#404040] mb-3">از سایز L تا XXL</p>
              <div className="flex w-full relative">
                <span className="block w-5 h-5 bg-black rounded-full z-20"></span>
                <span className="block w-5 h-5 bg-[#cbcbcb] rounded-full -mr-2 z-10"></span>
                <span className="block w-5 h-5 bg-secondary-900 rounded-full -mr-2"></span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center bg-white w-fit border border-[#cbcbcb]  rounded-2xl">
            <img
              src="/img/off/6.jpg"
              className="rounded-t-2xl h-70 w-[366px]"
              alt=""
            />
            <div className="flex flex-col justify-start items-start w-full p-6">
              <p className="text-secondary-900 font-semibold mb-3">
                کفش نایک مدل S-2000
              </p>
              <p className="text-sm mb-2 font-medium">۲۰۰,۰۰۰ تومان</p>
              <p className="text-xs text-[#404040] mb-3">از سایز L تا XXL</p>
              <div className="flex w-full relative">
                <span className="block w-5 h-5 bg-black rounded-full z-20"></span>
                <span className="block w-5 h-5 bg-[#cbcbcb] rounded-full -mr-2 z-10"></span>
                <span className="block w-5 h-5 bg-secondary-900 rounded-full -mr-2"></span>
              </div>
            </div>
          </div>
          <svg
            className="hidden md:block cursor-pointer"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9991 27.559C19.7457 27.559 19.4924 27.4657 19.2924 27.2657L10.5991 18.5724C9.18573 17.159 9.18573 14.839 10.5991 13.4257L19.2924 4.73238C19.6791 4.34572 20.3191 4.34572 20.7057 4.73238C21.0924 5.11905 21.0924 5.75905 20.7057 6.14572L12.0124 14.839C11.3724 15.479 11.3724 16.519 12.0124 17.159L20.7057 25.8524C21.0924 26.239 21.0924 26.879 20.7057 27.2657C20.5057 27.4524 20.2524 27.559 19.9991 27.559Z"
              fill="#021526"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default NewProducts2;
