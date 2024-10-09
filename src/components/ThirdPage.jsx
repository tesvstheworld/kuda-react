import ThirdPageImage from "../assets/third page image.png"; // Replace with your actual path

const ThirdPage = () => {
  return (
    <div className="thirdpage flex items-center justify-evenly my-12 mx-40">
      {/* Left Section: Text and Button */}
      <div className="simplelife flex flex-col items-start">
        <h1 className="text-4xl text-customPurple font-extrabold mb-4">
          Your phone + <br />
          our app + <br />
          a debit card = <br />a simpler life.
        </h1>
        <span className="text-sm font-medium text-black mb-4">
          We designed a money app for your lifestyle, and <br />
          you can get a debit card to go with it. That's all <br />
          you need to make the right money moves.
        </span>

        <a
          href="#"
          className="text-customPurple text-sm font-normal  flex items-center"
        >
          <b className="underline">Open An Account in Minutes</b>
          <i className="fa-solid fa-greater-than ml-2"></i>
        </a>
      </div>

      {/* Right Section: Image */}
      <div className="thirdimg w-96">
        <img
          src={ThirdPageImage}
          alt="Third Page Image"
          className="w-fit object-contain "
        />
      </div>
    </div>
  );
};

export default ThirdPage;
