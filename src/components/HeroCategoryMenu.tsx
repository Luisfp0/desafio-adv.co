import { Search2Icon } from "@chakra-ui/icons";
import "../index.css";

const HeroCategoryMenu = () => {
  return (
    <>
      <h1 className="text-[24px] mb-[25px] max-w-[1150px] mx-auto">
        Para o quê você precisa de design?
      </h1>
      <div className="mb-[15px] w-full overflow-hidden overflow-x-auto scrollbar-hide">
        <div className="max-w-[1150px] mx-auto ">
          <div className="flex gap-[15px] text-[19px]">
            <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0">
              <Search2Icon />
            </button>
            <button className="px-[30px] py-[22px] bg-[#01A1C1] box-border flex-shrink-0">
              Logotipo e identidade
            </button>
            <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0">
              Design de site e aplicativo
            </button>
            <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0">
              Negócios e publicidade
            </button>
            <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0">
              Vestuário e item promocional
            </button>
            <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0">
              Arte e Ilustração
            </button>
            <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0">
              Embalagem e rótulo
            </button>
            <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0">
              Livro e revista
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCategoryMenu;
