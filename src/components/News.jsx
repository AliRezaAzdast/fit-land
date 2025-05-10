import React from "react";

const News = () => {
  return (
    <section id="news">
      <div className="my-container mt-20">
        {/* title */}
        <div className="flex justify-center">
          <p className="text-secondary-700 text-[32px] font-bold">
            جدیدترین ها در اخبار ورزش
          </p>
        </div>
        {/* cards */}
        <div className="flex gap-5 items-center justify-between mt-10">
          <div className="flex flex-col items-center bg-white w-fit border border-[#cbcbcb]  rounded-2xl">
            <img
              src="/img/news/1.jpg"
              className="rounded-t-2xl h-[307px] w-full md:w-[564px] object-cover object-left"
              alt=""
            />
            <div className="flex flex-col justify-start items-start w-full p-6">
              <p className="text-secondary-900 font-bold text-2xl mb-3">
                افزایش دریافتی فوتبالیست ها و معافیت از سربازی
              </p>
              <p className="text-secondary-900 font-bold line-clamp-2 mb-5">
                خبرها حاکی از آن است که رییس فدراسیون فوتبال اعلام کرد در فصل
                جاری قرار داد هر بازیکن فوتبال 50 درصد افزایش پیدا میکند همچنین
                وی گفت...
              </p>
              <button className="flex items-center justify-center bg-primary text-white w-fit py-3 px-4 rounded-2xl gap-3 font-bold">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="white"
                  />
                  <path
                    d="M15.5 12.75H9.5C9.09 12.75 8.75 12.41 8.75 12C8.75 11.59 9.09 11.25 9.5 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z"
                    fill="white"
                  />
                  <path
                    d="M11.4975 15.7514C11.3075 15.7514 11.1175 15.6814 10.9675 15.5314L7.9675 12.5314C7.6775 12.2414 7.6775 11.7614 7.9675 11.4714L10.9675 8.47141C11.2575 8.18141 11.7375 8.18141 12.0275 8.47141C12.3175 8.76141 12.3175 9.24141 12.0275 9.53141L9.5575 12.0014L12.0275 14.4714C12.3175 14.7614 12.3175 15.2414 12.0275 15.5314C11.8775 15.6814 11.6875 15.7514 11.4975 15.7514Z"
                    fill="white"
                  />
                </svg>

                <span>مشاهده خبر</span>
              </button>
            </div>
          </div>

          <div className="md:flex hidden flex-col items-center bg-white w-fit border border-[#cbcbcb]  rounded-2xl">
            <img
              src="/img/news/2.png"
              className="rounded-t-2xl h-[307px] w-[564px] object-cover object-center"
              alt=""
            />
            <div className="flex flex-col justify-start items-start w-full p-6">
              <p className="text-secondary-900 font-bold text-2xl mb-3">
                افزایش دریافتی فوتبالیست ها و معافیت از سربازی
              </p>
              <p className="text-secondary-900 font-bold line-clamp-2 mb-5">
                خبرها حاکی از آن است که رییس فدراسیون فوتبال اعلام کرد در فصل
                جاری قرار داد هر بازیکن فوتبال 50 درصد افزایش پیدا میکند همچنین
                وی گفت...
              </p>
              <button className="flex items-center justify-center bg-primary text-white w-fit py-3 px-4 rounded-2xl gap-3 font-bold">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="white"
                  />
                  <path
                    d="M15.5 12.75H9.5C9.09 12.75 8.75 12.41 8.75 12C8.75 11.59 9.09 11.25 9.5 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z"
                    fill="white"
                  />
                  <path
                    d="M11.4975 15.7514C11.3075 15.7514 11.1175 15.6814 10.9675 15.5314L7.9675 12.5314C7.6775 12.2414 7.6775 11.7614 7.9675 11.4714L10.9675 8.47141C11.2575 8.18141 11.7375 8.18141 12.0275 8.47141C12.3175 8.76141 12.3175 9.24141 12.0275 9.53141L9.5575 12.0014L12.0275 14.4714C12.3175 14.7614 12.3175 15.2414 12.0275 15.5314C11.8775 15.6814 11.6875 15.7514 11.4975 15.7514Z"
                    fill="white"
                  />
                </svg>

                <span>مشاهده خبر</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
