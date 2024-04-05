import { Search2Icon } from "@chakra-ui/icons";

const HeroCategoryMenu = () => {
  return (
    <div className="mb-[15px] px-[15px] py-[20px]">
      <div>
        <div className="row">
          <div className="column">
            <h1 className="text-[24px] mb-[15px]">
              Para o quê você precisa de design?
            </h1>
          </div>
        </div>
        <div className="flex gap-[15px] text-[19px]">
          <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border">
            <Search2Icon />
          </button>
          <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border">
            Logotipo e identidade
          </button>
          <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border">
            Design de site e aplicativo
          </button>
          <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border">
            Negócios e publicidade
          </button>
          <button className="px-[30px] py-[22px] bg-[#DAD9D7] box-border">
            Vestuário e item pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCategoryMenu;
