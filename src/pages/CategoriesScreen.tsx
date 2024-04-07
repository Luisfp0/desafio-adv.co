import { Image } from "@chakra-ui/react";
import Cards from "../components/Cards";
import Quiz from "../assets/quiz.png";
import HeroCategoryMenu from "../components/HeroCategoryMenu";

const CategoriesScreen = () => {
  return (
    <>
      <HeroCategoryMenu />
      <div className="container flex flex-col justify-center lg:max-w-[1200px] md:max-w-[768px] max-w-[540px] mx-auto pt-[60px] mb-[50px]">
        <Cards />
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row  w-full justify-center items-center bg-[#efedea] mt-[50px] rounded-lg">
          <div className="flex flex-col items-start lg:w-7/12 md:w-7/12 sm:w-7/12 w-full p-[20px]">
            <h2 className="font-bold text-[25px] mb-[15px]">
              Fint the right brand solution for you
            </h2>
            <p className="text-[18px]">
              Answer a few simple questions about your business and we'll
              recommend a design solution that's right for you
            </p>
            <button className="mt-[20px] bg-black text-white text-[18px] font-semibold px-[15px] py-[10px] rounded-3xl">
              Take the branding Quiz
            </button>
          </div>
          <div className="lg:w-5/12 md:w-5/12 sm:w-5/12 w-full flex items-center justify-center p-[10px]">
            <Image src={Quiz} className=" h-full w-full"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesScreen;
