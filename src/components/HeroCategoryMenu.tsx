import { Search2Icon } from "@chakra-ui/icons";
import "../index.css";
import { useRef, useState } from "react";

const HeroCategoryMenu = () => {
  const [search, setSearch] = useState(false);
  const containerScrollRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<number | null>(null);

  const handleLeftScroll = () => {
    const container = containerScrollRef.current;
    if (container) {
      container.scrollTo({
        left: (container.scrollLeft -= 10),
        behavior: "smooth",
      });
    }
  };

  const handleRightScroll = () => {
    const container = containerScrollRef.current;
    if (container) {
      container.scrollTo({
        left: (container.scrollLeft += 10),
        behavior: "smooth",
      });
    }
  };

  const startScrolling = (props: string) => {
    if (props === "left") {
      horizontalScrollRef.current = setInterval(handleLeftScroll, 20);
    }
    if (props === "right") {
      horizontalScrollRef.current = setInterval(handleRightScroll, 20);
    }
  };

  const stopScrolling = () => {
    if (horizontalScrollRef.current) {
      clearInterval(horizontalScrollRef.current);
      horizontalScrollRef.current = null;
    }
  };
  return (
    <>
      <div className="relative">
        <h1 className="pl-[30px] mt-[30px] text-[24px] mb-[25px] max-w-[1150px] mx-auto">
          Para o quê você precisa de design?
        </h1>
        <div
          onMouseEnter={() => {
            startScrolling("left");
          }}
          onMouseLeave={() => {
            stopScrolling();
          }}
          className="z-10 absolute h-[125px] w-[520px]"
        ></div>
        <div
          onMouseEnter={() => {
            startScrolling("right");
          }}
          onMouseLeave={() => {
            stopScrolling();
          }}
          className="z-10 absolute h-[125px] w-[520px] right-0"
        ></div>
      </div>
      <div
        ref={containerScrollRef}
        className="mb-[15px] w-full overflow-hidden overflow-x-auto relative"
      >
        <div className="max-w-[1150px] mx-auto">
          <div className="flex items-center gap-[15px] text-[19px] pb-[50px] px-[30px]">
            <input
              className={`transition-all duration-300 font-bold py-[22px] text-[19px] rounded-md border-[#dad9d7]
                ${
                  search
                    ? "w-[300px] pl-[30px] pr-[85px] border-[1px]"
                    : "w-[0px] pl-0 pr-0"
                }
                `}
              placeholder="Logotipo, site, livro..."
            ></input>
            <button
              onClick={() => {
                setSearch(true);
              }}
              className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0"
            >
              <Search2Icon />
            </button>
            <button
              onClick={() => setSearch(false)}
              className="px-[30px] py-[22px] bg-[#01A1C1] box-border flex-shrink-0"
            >
              Logotipo e identidade
            </button>
            <button
              onClick={() => setSearch(false)}
              className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0"
            >
              Design de site e aplicativo
            </button>
            <button
              onClick={() => setSearch(false)}
              className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0"
            >
              Negócios e publicidade
            </button>
            <button
              onClick={() => setSearch(false)}
              className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0"
            >
              Vestuário e item promocional
            </button>
            <button
              onClick={() => setSearch(false)}
              className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0"
            >
              Arte e Ilustração
            </button>
            <button
              onClick={() => setSearch(false)}
              className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0"
            >
              Embalagem e rótulo
            </button>
            <button
              onClick={() => setSearch(false)}
              className="px-[30px] py-[22px] bg-[#DAD9D7] box-border flex-shrink-0"
            >
              Livro e revista
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCategoryMenu;
