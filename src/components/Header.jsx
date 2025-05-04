import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { HiMiniXMark } from "react-icons/hi2";

const Header = () => {

  const [navOpen, setNavOpen] = useState(false)
  
  const openNav = () => {
    setNavOpen(true)
  }

  const closeNav = () => {
    setNavOpen(false)
  }
  return (
    <>
      {/* blue header */}
      <div className="flex justify-center items-center w-full bg-secondary text-white p-1 h-10 md:h-fit">
        <p className="text-center font-bold text-[10px] md:text-base">
          با عضویت در فیت لند اولین ارسال را مهمون ما باش :)
        </p>
      </div>
      {/* desktop header */}
      <header className="hidden lg:block">
        <div className="my-container mt-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-[150px] gap-1">
              <img src="/logo.png" className="h-full" alt="" />
              <p className="text-xs text-868686 font-bold">
                فروشگاه لوازم ورزشی فیت‌لند
              </p>
            </div>
            {/* search form */}
            <div>
              <form
                action=""
                className="bg-[#F9F9F9] gap-2 p-3 rounded-2xl w-[600px] border border-[#CBCBCB] flex items-center font-bold"
              >
                <CiSearch className="text-primary w-6 h-6" />
                <input
                  type="text"
                  className="text-xs text-868686"
                  placeholder="جستجو"
                />
              </form>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 rounded-2xl bg-white header-btn-shadow px-2 py-3"
              >
                <span className="text-[#404040] font-bold">ثبت‌نام | ورود</span>
                <AiOutlineUser className="text-[#404040] h-6 w-6" />
              </a>
              <a
                href=""
                className="text-white bg-primary p-3 rounded-2xl relative "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.5 8.6303C16.09 8.6303 15.75 8.2903 15.75 7.8803V6.5003C15.75 5.4503 15.3 4.4303 14.52 3.7203C13.73 3.0003 12.71 2.6703 11.63 2.7703C9.83 2.9403 8.25 4.7803 8.25 6.7003V7.6703C8.25 8.0803 7.91 8.4203 7.5 8.4203C7.09 8.4203 6.75 8.0803 6.75 7.6703V6.6903C6.75 4.0003 8.92 1.5203 11.49 1.2703C12.99 1.1303 14.43 1.6003 15.53 2.6103C16.62 3.6003 17.25 5.0203 17.25 6.5003V7.8803C17.25 8.2903 16.91 8.6303 16.5 8.6303Z"
                    fill="white"
                  />
                  <path
                    d="M15.0037 22.75H9.00372C4.38372 22.75 3.52372 20.6 3.30372 18.51L2.55372 12.52C2.44372 11.44 2.40372 9.89 3.45372 8.73C4.35372 7.73 5.84372 7.25 8.00372 7.25H16.0037C18.1737 7.25 19.6637 7.74 20.5537 8.73C21.5937 9.89 21.5637 11.44 21.4537 12.5L20.7037 18.51C20.4837 20.6 19.6237 22.75 15.0037 22.75ZM8.00372 8.75C6.31372 8.75 5.15372 9.08 4.56372 9.74C4.07372 10.28 3.91372 11.11 4.04372 12.35L4.79372 18.34C4.96372 19.94 5.40372 21.26 9.00372 21.26H15.0037C18.6037 21.26 19.0437 19.95 19.2137 18.36L19.9637 12.35C20.0937 11.13 19.9337 10.3 19.4437 9.75C18.8537 9.08 17.6937 8.75 16.0037 8.75H8.00372Z"
                    fill="white"
                  />
                  <path
                    d="M15.4163 13.1504C14.8563 13.1504 14.4062 12.7004 14.4062 12.1504C14.4062 11.6004 14.8562 11.1504 15.4062 11.1504C15.9562 11.1504 16.4062 11.6004 16.4062 12.1504C16.4062 12.7004 15.9663 13.1504 15.4163 13.1504Z"
                    fill="white"
                  />
                  <path
                    d="M8.41625 13.1504C7.85625 13.1504 7.40625 12.7004 7.40625 12.1504C7.40625 11.6004 7.85625 11.1504 8.40625 11.1504C8.95625 11.1504 9.40625 11.6004 9.40625 12.1504C9.40625 12.7004 8.96625 13.1504 8.41625 13.1504Z"
                    fill="white"
                  />
                </svg>
                <span className="absolute h-4 w-4 flex items-center justify-center -top-1 -left-1 bg-secondary text-white rounded-full p-1 text-xs font-bold">
                  ۰
                </span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 bg-[#f9f9f9] py-4 px-8 rounded-2xl">
            <ul className="flex items-center gap-8">
              <li>
                <a href="" className="font-bold tracking-tighter">
                  مردانه
                </a>
              </li>
              <li>
                <a href="" className="font-bold tracking-tighter">
                  زنانه
                </a>
              </li>
              <li>
                <a href="" className="font-bold tracking-tighter">
                  بچگانه
                </a>
              </li>
              <li>
                <a href="" className="font-bold tracking-tighter">
                  لوازم ورزشی
                </a>
              </li>
              <li>
                <a href="" className="font-bold tracking-tighter">
                  شیکر و جاگ
                </a>
              </li>
            </ul>
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href=""
                  className="font-bold tracking-tighter flex items-center gap-1"
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_6626_13509)">
                      <path
                        d="M14.2451 17.0027C13.8476 17.0027 13.3376 16.8752 12.7001 16.5002L10.4576 15.1727C10.2251 15.0377 9.77509 15.0377 9.55009 15.1727L7.30009 16.5002C5.97259 17.2877 5.19259 16.9727 4.84009 16.7177C4.49509 16.4627 3.95509 15.8102 4.30759 14.3102L4.84009 12.0077C4.90009 11.7677 4.78009 11.3552 4.60009 11.1752L2.74009 9.31524C1.81009 8.38523 1.88509 7.59023 2.01259 7.20023C2.14009 6.81024 2.54509 6.12023 3.83509 5.90273L6.22759 5.50523C6.45259 5.46773 6.77509 5.22773 6.87259 5.02523L8.20009 2.37773C8.80009 1.17023 9.58759 0.990234 10.0001 0.990234C10.4126 0.990234 11.2001 1.17023 11.8001 2.37773L13.1201 5.01773C13.2251 5.22023 13.5476 5.46023 13.7726 5.49773L16.1651 5.89523C17.4626 6.11273 17.8676 6.80273 17.9876 7.19273C18.1076 7.58273 18.1826 8.37773 17.2601 9.30773L15.4001 11.1752C15.2201 11.3552 15.1076 11.7602 15.1601 12.0077L15.6926 14.3102C16.0376 15.8102 15.5051 16.4627 15.1601 16.7177C14.9726 16.8527 14.6726 17.0027 14.2451 17.0027ZM10.0001 13.9427C10.3676 13.9427 10.7351 14.0327 11.0276 14.2052L13.2701 15.5327C13.9226 15.9227 14.3351 15.9227 14.4926 15.8102C14.6501 15.6977 14.7626 15.3002 14.5976 14.5652L14.0651 12.2627C13.9226 11.6402 14.1551 10.8377 14.6051 10.3802L16.4651 8.52023C16.8326 8.15273 16.9976 7.79274 16.9226 7.54523C16.8401 7.29773 16.4951 7.09523 15.9851 7.01273L13.5926 6.61523C13.0151 6.51773 12.3851 6.05273 12.1226 5.52773L10.8026 2.88773C10.5626 2.40773 10.2626 2.12273 10.0001 2.12273C9.73759 2.12273 9.43759 2.40773 9.20509 2.88773L7.87759 5.52773C7.61509 6.05273 6.98509 6.51773 6.40759 6.61523L4.02259 7.01273C3.51259 7.09523 3.16759 7.29773 3.08509 7.54523C3.00259 7.79274 3.17509 8.16023 3.54259 8.52023L5.40259 10.3802C5.85259 10.8302 6.08509 11.6402 5.94259 12.2627L5.41009 14.5652C5.23759 15.3077 5.35759 15.6977 5.51509 15.8102C5.67259 15.9227 6.07759 15.9152 6.73759 15.5327L8.98009 14.2052C9.26509 14.0327 9.63259 13.9427 10.0001 13.9427Z"
                        fill="#FA541C"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_6626_13509"
                        x="0"
                        y="-1"
                        width="20"
                        height="20"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.980392 0 0 0 0 0.329412 0 0 0 0 0.109804 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_6626_13509"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_6626_13509"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <span>جدید ترین محصولات</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-bold tracking-tighter flex items-center gap-1"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_6626_13502)">
                      <path
                        d="M7.49146 18.062C7.34146 18.062 7.22146 18.032 7.13146 17.9945C6.83146 17.882 6.32146 17.5145 6.32146 16.352V11.5145H4.56646C3.56146 11.5145 3.20146 11.042 3.07396 10.7645C2.94646 10.4795 2.83396 9.90199 3.49396 9.14449L9.17146 2.69449C9.93646 1.82449 10.559 1.88449 10.859 1.99699C11.159 2.10949 11.669 2.47699 11.669 3.63949V8.47699H13.424C14.429 8.47699 14.789 8.94949 14.9165 9.22699C15.044 9.51199 15.1565 10.0895 14.4965 10.847L8.81896 17.297C8.28646 17.9045 7.82146 18.062 7.49146 18.062ZM10.4465 3.05449C10.424 3.08449 10.2665 3.15949 10.019 3.44449L4.34146 9.89449C4.13146 10.1345 4.10146 10.2845 4.10146 10.3145C4.11646 10.322 4.25146 10.397 4.56646 10.397H6.88396C7.19146 10.397 7.44646 10.652 7.44646 10.9595V16.3595C7.44646 16.7345 7.51396 16.8995 7.54396 16.9445C7.56646 16.9145 7.72396 16.8395 7.97146 16.5545L13.649 10.1045C13.859 9.86449 13.889 9.71449 13.889 9.68449C13.874 9.67699 13.739 9.60199 13.424 9.60199H11.1065C10.799 9.60199 10.544 9.34699 10.544 9.03949V3.63949C10.5515 3.26449 10.4765 3.10699 10.4465 3.05449Z"
                        fill="#FA541C"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_6626_13502"
                        x="-1"
                        y="0"
                        width="20"
                        height="20"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.980392 0 0 0 0 0.329412 0 0 0 0 0.109804 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_6626_13502"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_6626_13502"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <span>تخفیفات ویژه</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-bold tracking-tighter flex items-center gap-1"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_6626_13493)">
                      <path
                        d="M9.00031 18.0624C8.55031 18.0624 8.10781 17.9574 7.74781 17.7549L4.20031 15.7074C2.73031 14.7174 2.63281 14.5374 2.63281 12.9849V9.26492C2.63281 7.71242 2.73031 7.53242 4.17031 6.56492L7.75531 4.49492C8.46781 4.08242 9.54031 4.08242 10.2528 4.49492L13.8003 6.54242C15.2703 7.53242 15.3678 7.71242 15.3678 9.26492V12.9849C15.3678 14.5374 15.2703 14.7174 13.8303 15.6849L10.2453 17.7549C9.89281 17.9649 9.44281 18.0624 9.00031 18.0624ZM9.00031 5.31242C8.74531 5.31242 8.49031 5.36492 8.31031 5.46992L4.76281 7.51742C3.75781 8.19992 3.75781 8.19992 3.75781 9.26492V12.9849C3.75781 14.0499 3.75781 14.0499 4.80031 14.7549L8.31781 16.7799C8.67781 16.9899 9.33031 16.9899 9.69031 16.7799L13.2378 14.7324C14.2428 14.0499 14.2428 14.0499 14.2428 12.9849V9.26492C14.2428 8.19992 14.2428 8.19992 13.2003 7.49492L9.68281 5.46992C9.51031 5.36492 9.25531 5.31242 9.00031 5.31242Z"
                        fill="#FA541C"
                      />
                      <path
                        d="M13.125 7.285C12.8175 7.285 12.5625 7.03 12.5625 6.7225V4.75C12.5625 3.565 12.06 3.0625 10.875 3.0625H7.125C5.94 3.0625 5.4375 3.565 5.4375 4.75V6.67C5.4375 6.9775 5.1825 7.2325 4.875 7.2325C4.5675 7.2325 4.3125 6.985 4.3125 6.67V4.75C4.3125 2.935 5.31 1.9375 7.125 1.9375H10.875C12.69 1.9375 13.6875 2.935 13.6875 4.75V6.7225C13.6875 7.03 13.4325 7.285 13.125 7.285Z"
                        fill="#FA541C"
                      />
                      <path
                        d="M10.2212 14.2223C10.0637 14.2223 9.89871 14.1923 9.73371 14.1248L8.99871 13.8398L8.26371 14.1323C7.86621 14.2898 7.46121 14.2523 7.16121 14.0348C6.86121 13.8173 6.70371 13.4423 6.72621 13.0148L6.77121 12.2273L6.26871 11.6198C5.99871 11.2823 5.90871 10.8923 6.02871 10.5323C6.14121 10.1798 6.44871 9.90984 6.86121 9.80484L7.62621 9.60984L8.05371 8.94234C8.51121 8.22234 9.49371 8.22234 9.95121 8.94234L10.3787 9.60984L11.1437 9.80484C11.5562 9.90984 11.8637 10.1798 11.9762 10.5323C12.0887 10.8848 11.9987 11.2823 11.7287 11.6123L11.2262 12.2198L11.2712 13.0073C11.2937 13.4348 11.1362 13.8023 10.8362 14.0273C10.6562 14.1548 10.4462 14.2223 10.2212 14.2223ZM7.13871 10.8998L7.64121 11.5073C7.81371 11.7098 7.91121 12.0323 7.89621 12.2948L7.85121 13.0823L8.58621 12.7898C8.83371 12.6923 9.16371 12.6923 9.41121 12.7898L10.1462 13.0823L10.1012 12.2948C10.0862 12.0323 10.1837 11.7173 10.3562 11.5073L10.8587 10.8998L10.0937 10.7048C9.83871 10.6373 9.56871 10.4423 9.42621 10.2248L9.00621 9.56484L8.57871 10.2248C8.43621 10.4498 8.16621 10.6448 7.91121 10.7123L7.13871 10.8998Z"
                        fill="#FA541C"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_6626_13493"
                        x="-1"
                        y="0"
                        width="20"
                        height="20"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.980392 0 0 0 0 0.329412 0 0 0 0 0.109804 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_6626_13493"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_6626_13493"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <span>پرفروش ترین ها</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* mobile header */}
      <div className="my-container lg:hidden block mt-2">
        <div className="flex justify-between items-center">
          <img src="/logo-mobile.png" className="h-7 w-[81px]" alt="" />
          <VscThreeBars onClick={openNav} className="w-6 h-6 " />
        </div>
        <form
                action=""
                className="flex items-center w-full mt-2 bg-[#F9F9F9] gap-2 p-3 rounded-2xl border border-[#CBCBCB] font-bold"
              >
                <CiSearch className="text-primary w-6 h-6" />
                <input
                  type="text"
                  className="text-xs text-868686"
                  placeholder="جستجو"
                />
              </form>
      </div>
      {/* nav bar */}
      <div className={`fixed flex lg:hidden flex-col items-center justify-between ${navOpen ? 'left-0' : '-left-60'} bottom-0 bg-white p-4 h-[100vh] w-60 z-50 transition-all`}>
        <div className="w-full">
          <div className="flex justify-between items-center w-full pb-3">
            <HiMiniXMark onClick={closeNav} className="h-6 w-6" />
            <img
              src="/logo-mobile.png"
              className="h-7 w-[81px]"
              alt=""
            />
          </div>
          <ul className="flex flex-col border-b pb-4 mt-4 border-neutral-400 items-center gap-8">
            <li>
              <a href="" className="font-bold tracking-tighter">
                مردانه
              </a>
            </li>
            <li>
              <a href="" className="font-bold tracking-tighter">
                زنانه
              </a>
            </li>
            <li>
              <a href="" className="font-bold tracking-tighter">
                بچگانه
              </a>
            </li>
            <li>
              <a href="" className="font-bold tracking-tighter">
                لوازم ورزشی
              </a>
            </li>
            <li>
              <a href="" className="font-bold tracking-tighter">
                شیکر و جاگ
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex  flex-col border-t pt-4 border-neutral-400 items-center gap-8">
          <li>
            <a
              href=""
              className="font-bold tracking-tighter flex items-center gap-1"
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_6626_13509)">
                  <path
                    d="M14.2451 17.0027C13.8476 17.0027 13.3376 16.8752 12.7001 16.5002L10.4576 15.1727C10.2251 15.0377 9.77509 15.0377 9.55009 15.1727L7.30009 16.5002C5.97259 17.2877 5.19259 16.9727 4.84009 16.7177C4.49509 16.4627 3.95509 15.8102 4.30759 14.3102L4.84009 12.0077C4.90009 11.7677 4.78009 11.3552 4.60009 11.1752L2.74009 9.31524C1.81009 8.38523 1.88509 7.59023 2.01259 7.20023C2.14009 6.81024 2.54509 6.12023 3.83509 5.90273L6.22759 5.50523C6.45259 5.46773 6.77509 5.22773 6.87259 5.02523L8.20009 2.37773C8.80009 1.17023 9.58759 0.990234 10.0001 0.990234C10.4126 0.990234 11.2001 1.17023 11.8001 2.37773L13.1201 5.01773C13.2251 5.22023 13.5476 5.46023 13.7726 5.49773L16.1651 5.89523C17.4626 6.11273 17.8676 6.80273 17.9876 7.19273C18.1076 7.58273 18.1826 8.37773 17.2601 9.30773L15.4001 11.1752C15.2201 11.3552 15.1076 11.7602 15.1601 12.0077L15.6926 14.3102C16.0376 15.8102 15.5051 16.4627 15.1601 16.7177C14.9726 16.8527 14.6726 17.0027 14.2451 17.0027ZM10.0001 13.9427C10.3676 13.9427 10.7351 14.0327 11.0276 14.2052L13.2701 15.5327C13.9226 15.9227 14.3351 15.9227 14.4926 15.8102C14.6501 15.6977 14.7626 15.3002 14.5976 14.5652L14.0651 12.2627C13.9226 11.6402 14.1551 10.8377 14.6051 10.3802L16.4651 8.52023C16.8326 8.15273 16.9976 7.79274 16.9226 7.54523C16.8401 7.29773 16.4951 7.09523 15.9851 7.01273L13.5926 6.61523C13.0151 6.51773 12.3851 6.05273 12.1226 5.52773L10.8026 2.88773C10.5626 2.40773 10.2626 2.12273 10.0001 2.12273C9.73759 2.12273 9.43759 2.40773 9.20509 2.88773L7.87759 5.52773C7.61509 6.05273 6.98509 6.51773 6.40759 6.61523L4.02259 7.01273C3.51259 7.09523 3.16759 7.29773 3.08509 7.54523C3.00259 7.79274 3.17509 8.16023 3.54259 8.52023L5.40259 10.3802C5.85259 10.8302 6.08509 11.6402 5.94259 12.2627L5.41009 14.5652C5.23759 15.3077 5.35759 15.6977 5.51509 15.8102C5.67259 15.9227 6.07759 15.9152 6.73759 15.5327L8.98009 14.2052C9.26509 14.0327 9.63259 13.9427 10.0001 13.9427Z"
                    fill="#FA541C"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_6626_13509"
                    x="0"
                    y="-1"
                    width="20"
                    height="20"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.980392 0 0 0 0 0.329412 0 0 0 0 0.109804 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_6626_13509"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_6626_13509"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span>جدید ترین محصولات</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-bold tracking-tighter flex items-center gap-1"
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_6626_13502)">
                  <path
                    d="M7.49146 18.062C7.34146 18.062 7.22146 18.032 7.13146 17.9945C6.83146 17.882 6.32146 17.5145 6.32146 16.352V11.5145H4.56646C3.56146 11.5145 3.20146 11.042 3.07396 10.7645C2.94646 10.4795 2.83396 9.90199 3.49396 9.14449L9.17146 2.69449C9.93646 1.82449 10.559 1.88449 10.859 1.99699C11.159 2.10949 11.669 2.47699 11.669 3.63949V8.47699H13.424C14.429 8.47699 14.789 8.94949 14.9165 9.22699C15.044 9.51199 15.1565 10.0895 14.4965 10.847L8.81896 17.297C8.28646 17.9045 7.82146 18.062 7.49146 18.062ZM10.4465 3.05449C10.424 3.08449 10.2665 3.15949 10.019 3.44449L4.34146 9.89449C4.13146 10.1345 4.10146 10.2845 4.10146 10.3145C4.11646 10.322 4.25146 10.397 4.56646 10.397H6.88396C7.19146 10.397 7.44646 10.652 7.44646 10.9595V16.3595C7.44646 16.7345 7.51396 16.8995 7.54396 16.9445C7.56646 16.9145 7.72396 16.8395 7.97146 16.5545L13.649 10.1045C13.859 9.86449 13.889 9.71449 13.889 9.68449C13.874 9.67699 13.739 9.60199 13.424 9.60199H11.1065C10.799 9.60199 10.544 9.34699 10.544 9.03949V3.63949C10.5515 3.26449 10.4765 3.10699 10.4465 3.05449Z"
                    fill="#FA541C"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_6626_13502"
                    x="-1"
                    y="0"
                    width="20"
                    height="20"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.980392 0 0 0 0 0.329412 0 0 0 0 0.109804 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_6626_13502"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_6626_13502"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <span>تخفیفات ویژه</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-bold tracking-tighter flex items-center gap-1"
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_6626_13493)">
                  <path
                    d="M9.00031 18.0624C8.55031 18.0624 8.10781 17.9574 7.74781 17.7549L4.20031 15.7074C2.73031 14.7174 2.63281 14.5374 2.63281 12.9849V9.26492C2.63281 7.71242 2.73031 7.53242 4.17031 6.56492L7.75531 4.49492C8.46781 4.08242 9.54031 4.08242 10.2528 4.49492L13.8003 6.54242C15.2703 7.53242 15.3678 7.71242 15.3678 9.26492V12.9849C15.3678 14.5374 15.2703 14.7174 13.8303 15.6849L10.2453 17.7549C9.89281 17.9649 9.44281 18.0624 9.00031 18.0624ZM9.00031 5.31242C8.74531 5.31242 8.49031 5.36492 8.31031 5.46992L4.76281 7.51742C3.75781 8.19992 3.75781 8.19992 3.75781 9.26492V12.9849C3.75781 14.0499 3.75781 14.0499 4.80031 14.7549L8.31781 16.7799C8.67781 16.9899 9.33031 16.9899 9.69031 16.7799L13.2378 14.7324C14.2428 14.0499 14.2428 14.0499 14.2428 12.9849V9.26492C14.2428 8.19992 14.2428 8.19992 13.2003 7.49492L9.68281 5.46992C9.51031 5.36492 9.25531 5.31242 9.00031 5.31242Z"
                    fill="#FA541C"
                  />
                  <path
                    d="M13.125 7.285C12.8175 7.285 12.5625 7.03 12.5625 6.7225V4.75C12.5625 3.565 12.06 3.0625 10.875 3.0625H7.125C5.94 3.0625 5.4375 3.565 5.4375 4.75V6.67C5.4375 6.9775 5.1825 7.2325 4.875 7.2325C4.5675 7.2325 4.3125 6.985 4.3125 6.67V4.75C4.3125 2.935 5.31 1.9375 7.125 1.9375H10.875C12.69 1.9375 13.6875 2.935 13.6875 4.75V6.7225C13.6875 7.03 13.4325 7.285 13.125 7.285Z"
                    fill="#FA541C"
                  />
                  <path
                    d="M10.2212 14.2223C10.0637 14.2223 9.89871 14.1923 9.73371 14.1248L8.99871 13.8398L8.26371 14.1323C7.86621 14.2898 7.46121 14.2523 7.16121 14.0348C6.86121 13.8173 6.70371 13.4423 6.72621 13.0148L6.77121 12.2273L6.26871 11.6198C5.99871 11.2823 5.90871 10.8923 6.02871 10.5323C6.14121 10.1798 6.44871 9.90984 6.86121 9.80484L7.62621 9.60984L8.05371 8.94234C8.51121 8.22234 9.49371 8.22234 9.95121 8.94234L10.3787 9.60984L11.1437 9.80484C11.5562 9.90984 11.8637 10.1798 11.9762 10.5323C12.0887 10.8848 11.9987 11.2823 11.7287 11.6123L11.2262 12.2198L11.2712 13.0073C11.2937 13.4348 11.1362 13.8023 10.8362 14.0273C10.6562 14.1548 10.4462 14.2223 10.2212 14.2223ZM7.13871 10.8998L7.64121 11.5073C7.81371 11.7098 7.91121 12.0323 7.89621 12.2948L7.85121 13.0823L8.58621 12.7898C8.83371 12.6923 9.16371 12.6923 9.41121 12.7898L10.1462 13.0823L10.1012 12.2948C10.0862 12.0323 10.1837 11.7173 10.3562 11.5073L10.8587 10.8998L10.0937 10.7048C9.83871 10.6373 9.56871 10.4423 9.42621 10.2248L9.00621 9.56484L8.57871 10.2248C8.43621 10.4498 8.16621 10.6448 7.91121 10.7123L7.13871 10.8998Z"
                    fill="#FA541C"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_6626_13493"
                    x="-1"
                    y="0"
                    width="20"
                    height="20"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.980392 0 0 0 0 0.329412 0 0 0 0 0.109804 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_6626_13493"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_6626_13493"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <span>پرفروش ترین ها</span>
            </a>
          </li>
        </ul>
      </div>

      {/* open nav dark back ground */}
      <div onClick={closeNav} className={`fixed lg:hidden left-0 bottom-0 ${navOpen ? 'visible opacity-100' : 'invisible opacity-0'} h-[100vh] w-full bg-black/40 z-40 transition-all`}>

      </div>
    </>
  );
};

export default Header;
