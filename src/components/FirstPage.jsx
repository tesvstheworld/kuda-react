import ScreenshotImage from "../assets/Screenshot (200).png"; // Replace with your actual path
import RotateImage from "../assets/rotate.png"; // Replace with your actual path

const FirstPage = () => {
  return (
    <div
      className="firstpage flex items-center justify-between my-24 mx-48"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      {/* Left Section: Text and Download */}
      <div className="themoney max-w-md font-bold  basis-2/4">
        <h1 className="text-5xl text-customPurple font-extrabold mt-12 w-96">
          The money app for Africans.
        </h1>
        <p className="text-xl text-black mt-4 w-80 font-semibold">
          Make free transfers, enjoy cashless payment options and earn interest
          on your savings with Kuda.
        </p>
        <div className="download flex mt-4">
          <img
            src={ScreenshotImage}
            alt="Kuda App Screenshot"
            className="h-12"
          />
        </div>
      </div>

      {/* Right Section: Rotating Image */}
      <div className="rotatingframe">
        <img src={RotateImage} alt="Rotating Phone" className="w-96 ml-16" />
      </div>
    </div>
  );
};

export default FirstPage;
