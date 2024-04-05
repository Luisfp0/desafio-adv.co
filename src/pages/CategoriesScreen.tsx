import { Image } from "@chakra-ui/react";
import Cards from "../components/Cards";
import Quiz from "../assets/quiz.png";

const CategoriesScreen = () => {
  return (
    <div className="container flex flex-col justify-center max-w-[1150px] mx-auto pt-[60px] mb-[50px]">
      <Cards />
      <div className="flex w-full justify-center items-center bg-[#efedea] mt-[50px] rounded-lg">
        <div className="flex flex-col items-start w-7/12 p-[20px]">
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
        <div className="w-5/12 flex items-center justify-center p-[10px]">
          <Image src={Quiz} className=" h-full w-full"></Image>
        </div>
      </div>
    </div>
  );
};

export default CategoriesScreen;
