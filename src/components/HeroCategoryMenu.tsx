import { Search2Icon } from "@chakra-ui/icons";
import "../index.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

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
        <h1 className="pl-[30px] mt-[30px] lg:text-[24px] md:text-[24px] text-[19px] mb-[25px] lg:max-w-[1200px] md:max-w-[768px] max-w-[540px] mx-auto">
          Para o quê você precisa de design?
        </h1>
        <div
          onMouseEnter={() => {
            startScrolling("left");
          }}
          onMouseLeave={() => {
            stopScrolling();
          }}
          className="z-10 absolute lg:h-[125px] lg:w-[100px] md:h-[125px] md:w-[180px]"
        ></div>
        <div
          onMouseEnter={() => {
            startScrolling("right");
          }}
          onMouseLeave={() => {
            stopScrolling();
          }}
          className="z-10 absolute lg:h-[125px] lg:w-[100px] md:h-[125px] md:w-[180px] right-0"
        ></div>
      </div>
      <div
        ref={containerScrollRef}
        className="mb-[15px] overflow-x-hidden relative"
      >
        <div className="lg:max-w-[1200px] md:max-w-[768px] max-w-[540px] mx-auto">
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
              className="lg:px-[30px] lg:py-[22px] md:px-[30px] md:py-[22px] px-[25px] py-[17px] box-border flex-shrink-0 bg-[#DAD9D7] hover:bg-white hover:shadow-2xl rounded-md"
            >
              <Search2Icon />
            </button>
            <Link
              onClick={() => setSearch(false)}
              to="/checkout"
              className="btn btn-primary lg:px-[30px] lg:py-[22px] md:px-[30px] md:py-[22px] px-[25px] py-[17px] box-border flex-shrink-0 bg-[#01A1C1] hover:shadow-2xl rounded-md"
            >
              Logotipo e identidade
            </Link>
            <button
              onClick={() => setSearch(false)}
              className="lg:px-[30px] lg:py-[22px] md:px-[30px] md:py-[22px] px-[25px] py-[17px] box-border flex-shrink-0 bg-[#DAD9D7] hover:bg-white hover:shadow-2xl rounded-md"
            >
              Design de site e aplicativo
            </button>
            <button
              onClick={() => setSearch(false)}
              className="lg:px-[30px] lg:py-[22px] md:px-[30px] md:py-[22px] px-[25px] py-[17px] box-border flex-shrink-0 bg-[#DAD9D7] hover:bg-white hover:shadow-2xl rounded-md"
            >
              Negócios e publicidade
            </button>
            <button
              onClick={() => setSearch(false)}
              className="lg:px-[30px] lg:py-[22px] md:px-[30px] md:py-[22px] px-[25px] py-[17px] box-border flex-shrink-0 bg-[#DAD9D7] hover:bg-white hover:shadow-2xl rounded-md"
            >
              Vestuário e item promocional
            </button>
            <button
              onClick={() => setSearch(false)}
              className="lg:px-[30px] lg:py-[22px] md:px-[30px] md:py-[22px] px-[25px] py-[17px] box-border flex-shrink-0 bg-[#DAD9D7] hover:bg-white hover:shadow-2xl rounded-md"
            >
              Arte e Ilustração
            </button>
            <button
              onClick={() => setSearch(false)}
              className="lg:px-[30px] lg:py-[22px] md:px-[30px] md:py-[22px] px-[25px] py-[17px] box-border flex-shrink-0 bg-[#DAD9D7] hover:bg-white hover:shadow-2xl rounded-md"
            >
              Embalagem e rótulo
            </button>
            <button
              onClick={() => setSearch(false)}
              className="lg:px-[30px] lg:py-[22px] md:px-[30px] md:py-[22px] px-[25px] py-[17px] box-border flex-shrink-0 bg-[#DAD9D7] hover:bg-white hover:shadow-2xl rounded-md "
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
