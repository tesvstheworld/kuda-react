import React from "react";

const SecondPage = () => {
  return (
    <div
      className="secondpage flex flex-col items-center justify-center text-customPurple"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      {/* First Row */}
      <div className="rows flex pt-8 pr-4 pl-5 mb-5">
        <div
          className="rowcontent flex flex-col items-start justify-center bg-white shadow-lg mr-5"
          style={{
            width: "240px",
            padding: "22px 25px",
            boxSizing: "content-box",
          }}
        >
          <div className="icon bg-blue-200 text-customPurple w-10 h-10 rounded-full flex items-center justify-center mb-3">
            <i className="fa-solid fa-credit-card"></i>
          </div>
          <span className="text-sm font-bold">
            Order a Kuda Visa card on the <br />
            app with pickup and delivery options.
          </span>
        </div>

        <div
          className="rowcontent flex flex-col items-start justify-center bg-white shadow-lg mr-5"
          style={{
            width: "240px",
            padding: "22px 25px",
            boxSizing: "content-box",
          }}
        >
          <div className="icon bg-blue-200 text-customPurple w-10 h-10 rounded-full flex items-center justify-center mb-3">
            <i className="fa-solid fa-clock"></i>
          </div>
          <span className="text-sm font-bold">
            Enjoy cashless payment options <br />
            online and offline.
          </span>
        </div>

        <div
          className="rowcontent flex flex-col items-start justify-center bg-white shadow-lg"
          style={{
            width: "240px",
            padding: "22px 25px",
            boxSizing: "content-box",
          }}
        >
          <div className="icon bg-blue-200 text-customPurple w-10 h-10 rounded-full flex items-center justify-center mb-3">
            <i className="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
          <span className="text-sm font-bold">
            Pay your essential bills and buy <br />
            gift cards easily.
          </span>
        </div>
      </div>

      {/* Second Row */}
      <div className="colomn flex pt-8 pr-4 pl-5">
        <div
          className="colomncontent flex flex-col items-start justify-center bg-white shadow-lg mr-5"
          style={{
            width: "240px",
            padding: "22px 25px",
            boxSizing: "content-box",
          }}
        >
          <div className="icon bg-blue-200 text-customPurple w-10 h-10 rounded-full flex items-center justify-center mb-3">
            <svg width="37" height="38" viewBox="0 0 37 38" fill="none">
              <circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle>
              <path
                d="M14.9197 15.9512C14.9197 12.8724 17.4156 10.3765 20.4945 10.3765C23.5733 10.3765 26.0692 12.8724 26.0692 15.9512C26.0692 19.0301 23.5733 21.526 20.4945 21.526C17.4156 21.526 14.9197 19.0301 14.9197 15.9512Z"
                fill="white"
              ></path>
              <path
                d="M18.8958 18.1076L13.7857 22.0356L8.78735 20.0079L22.1668 14.8364L16.9954 28.2159L14.9676 23.2175L18.8958 18.1076Z"
                fill="#40196D"
              ></path>
            </svg>
          </div>
          <span className="text-sm font-bold">
            Get 25 free transfers to <br />
            Nigerian banks every month.
          </span>
        </div>

        <div
          className="colomncontent flex flex-col items-start justify-center bg-white shadow-lg"
          style={{
            width: "240px",
            padding: "22px 25px",
            boxSizing: "content-box",
          }}
        >
          <div className="icon bg-blue-200 text-customPurple w-10 h-10 rounded-full flex items-center justify-center mb-3">
            <i className="fa-solid fa-piggy-bank"></i>
          </div>
          <span className="text-sm font-bold">
            Save money automatically any <br />
            time you spend.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
