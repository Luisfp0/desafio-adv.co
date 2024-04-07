import { useEffect, useRef, useState } from "react";
import winningImage from "../assets/winning-design.avif";
import winningImage02 from "../assets/winning-design02.avif";
import { ArrowDownIcon, CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import bgImage from "../assets/kids.png";
import contest01 from "../assets/contest-1.jpg";
import contest02 from "../assets/contest-2.jpg";
import contest03 from "../assets/contest-3.jpg";

function CheckoutScreen() {
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(true);
  const [ulFixed, setUlFixed] = useState(false);
  const [selected, setSelected] = useState("");

  const fixedOnScrollRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const ulElement = fixedOnScrollRef.current;
      if (ulElement) {
        const rect = ulElement.getBoundingClientRect();
        if (rect.top <= 0) {
          setUlFixed(true);
        } else {
          setUlFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {ulFixed && (
        <div className="flex fixed top-0 w-[100%] bg-white justify-start h-[80px] gap-[15px] items-center shadow-lg z-10">
          <ul
            className={`justify-start flex w-full gap-[25px] max-w-[1200px] mx-auto`}
          >
            <div className="w-[660px] flex justify-between">
              <li
                onClick={() => setSelected("first")}
                className={`pb-[4px] ${
                  selected === "first" && "border-b-[2px]"
                } border-black`}
              >
                O que está incluido
              </li>
              <li
                onClick={() => setSelected("second")}
                className={`pb-[4px] ${
                  selected === "second" && "border-b-[2px]"
                } border-black`}
              >
                Como funciona
              </li>
              <li
                onClick={() => setSelected("third")}
                className={`pb-[4px] ${
                  selected === "third" && "border-b-[2px]"
                } border-black`}
              >
                Preços
              </li>
              <li
                onClick={() => setSelected("fourth")}
                className={`pb-[4px] ${
                  selected === "fourth" && "border-b-[2px]"
                } border-black`}
              >
                Perguntas frequentes
              </li>
            </div>
          </ul>
        </div>
      )}
      <div className="container flex justify-between lg:max-w-[1200px] md:max-w-[768px] max-w-[540px] mx-auto pt-[60px] mb-[50px]">
        <div className="w-[55%] relative">
          <div
            className={`${
              left ? "opacity-100" : "opacity-0"
            } transition-all duration-700 absolute bg-[#fe5f50] z-20 py-[5px] px-[10px] right-[10px] top-[10px]`}
          >
            <span className="text-white text-[12px]">Vencedor</span>
          </div>
          <img
            className={`${
              left ? "opacity-100" : "opacity-0"
            } transition-all duration-700 absolute top-0`}
            alt="Winner Designer"
            src={winningImage}
          ></img>
          <img alt="Winner Designer" src={winningImage02}></img>
          <div className="flex justify-between mt-[16px] items-center">
            <div className="flex">
              <div
                onClick={() => {
                  if (left === false) {
                    setLeft(true);
                    setRight(false);
                  }
                }}
                className={`${
                  left ? "bg-black" : "bg-[#313030]"
                } w-[10px] h-[10px] cursor-pointer rounded-3xl opacity-[0.8]`}
              ></div>
              <div
                onClick={() => {
                  if (right === false) {
                    setLeft(false);
                    setRight(true);
                  }
                }}
                className={`${
                  right ? "bg-black" : "bg-[#313030]"
                } w-[10px] h-[10px] cursor-pointer rounded-3xl ml-[10px] opacity-[0.8]`}
              ></div>
            </div>
            <div className="flex flex-col text-[14px] text-end font-serif opacity-[0.8]">
              <span>
                Concurso de design criado por
                <span className="underline">The Hype Lab</span>
              </span>
              <span>
                Design vencedor de
                <span className="underline">leonelbalza</span>
              </span>
            </div>
          </div>
          <ul
            ref={fixedOnScrollRef}
            className={`mt-[64px] mb-[48px] justify-between flex w-full  border-b-[1px]`}
          >
            <li
              onClick={() => setSelected("first")}
              className={`pb-[4px] ${
                selected === "first" && "border-b-[2px]"
              } border-black`}
            >
              O que está incluido
            </li>
            <li
              onClick={() => setSelected("second")}
              className={`pb-[4px] ${
                selected === "second" && "border-b-[2px]"
              } border-black`}
            >
              Como funciona
            </li>
            <li
              onClick={() => setSelected("third")}
              className={`pb-[4px] ${
                selected === "third" && "border-b-[2px]"
              } border-black`}
            >
              Preços
            </li>
            <li
              onClick={() => setSelected("fourth")}
              className={`pb-[4px] ${
                selected === "fourth" && "border-b-[2px]"
              } border-black`}
            >
              Perguntas frequentes
            </li>
          </ul>
          <div className="mb-[64px]">
            <h1 className="pb-[12px] font-semibold text-[24px]">
              Uma marca tão única quanto seu negócio
            </h1>
            <p className="text-[16px]">
              Convide nossos designers profissionais para dar vida à sua marca
              através do design de um logotipo personalizado, cartão de visita,
              papel timbrado, envelope e capa para Facebook.
            </p>
          </div>
          <hr className="my-[64px]"></hr>
          <div className="mt-[48px]">
            <h1 className="font-semibold text-[24px]">O que está incluido ?</h1>
            <ul className="gap-[10px] flex flex-col text-[16px] pt-[24px]">
              <li className="flex">
                <CheckIcon className="mr-[7px] h-full" />
                <span>
                  1 design de logotipo finalizado e totalmente personalizado
                </span>
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> 1 design de cartão de visita
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> 1 papel timbrado
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> 1 envelope
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> 1 capa para Facebook
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> Propriedade total dos
                direitos autorais
              </li>
              <li className="flex">
                <CheckIcon className="mr-[7px] h-full" />
                <span>
                  Arquivos digitais para web e impressão (RGB, CMYK, PNG, JPG,
                  PDF)
                </span>
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> O arquivo original, editável
                (ex. AI)
              </li>
              <li className="flex">
                <CheckIcon className="mr-[7px] h-full" />
                <span>
                  100% garantia de satisfação ou o seu dinheiro de volta
                </span>
              </li>
            </ul>
          </div>
          <hr className="my-[64px]"></hr>
          <div className="pb-[64px]">
            <h1 className="text-[24px] pb-[16px] font-semibold">
              Método de colaboração
            </h1>
            <div
              className="p-[24px] bg-[#FAF9F7]"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "25%",
              }}
            >
              <h2 className="font-medium pb-[8px] text-[19px]">
                Pacote do concurso
              </h2>
              <p className="text-[16px]">
                Disponibilize seu briefing do design para toda nossa comunidade.
                Os designers enviam suas ideias e você escolhe seu design
                favorito.
              </p>
              <ul className="gap-[10px] flex flex-col text-[16px] mb-[10px]">
                <li className="flex">
                  <CheckIcon className="mr-[16px] h-full" />
                  <span>Conceitos criativos de vários designers</span>
                </li>
                <li className="flex">
                  <CheckIcon className="mr-[16px] h-full" />
                  <span>
                    Escolha um design vencedor e receba os direitos autorais e
                    os arquivos finais
                  </span>
                </li>
                <li className="flex">
                  <CheckIcon className="mr-[16px] h-full" />
                  <span>
                    Trabalhe com o designer vencedor para finalizar os itens do
                    seu pacote
                  </span>
                </li>
              </ul>
              <span className="underline">
                Saiba mais
                <ChevronRightIcon boxSize={5} />
              </span>
            </div>
          </div>
          <div className="mb-[64px]">
            <h1 className="pb-[12px] font-semibold text-[24px]">
              Como funciona o concurso
            </h1>
            <div className="flex">
              <div className="w-2/6 flex flex-col text-[16px]">
                <img src={contest01}></img>
                <span>01.</span>
                <span className="text-[14px]">
                  Escreva um briefing do design
                </span>
              </div>
              <div className="w-2/6 flex flex-col text-[16px]">
                <img src={contest02}></img>
                <span>02.</span>
                <span className="text-[14px]">
                  Os designers enviam propostas
                </span>
              </div>
              <div className="w-2/6 flex flex-col text-[16px]">
                <img src={contest03}></img>
                <span>03.</span>
                <span className="text-[14px]">
                  Selecione um designer vencedor
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[480px] h-[626px] p-[32px] border-[2px] rounded-lg fixed right-[245px]">
          <div>
            <h1 className="pb-[24px] text-[32px] font-bold">
              Logo & identidade visual
            </h1>
            <h2 className="text-[19px] pb-[24px] font-semibold">
              A partir de U$ 599
            </h2>
            <ul className="gap-[10px] flex flex-col text-[16px] pb-[24px]">
              <li className="flex">
                <CheckIcon className="mr-[7px] h-full" />
                <span>
                  1 design de logotipo finalizado e totalmente personalizado
                </span>
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> 1 design de cartão de visita
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> 1 papel timbrado
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> 1 envelope
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> 1 capa para Facebook
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> Propriedade total dos
                direitos autorais
              </li>
              <li className="flex">
                <CheckIcon className="mr-[7px] h-full" />
                <span>
                  Arquivos digitais para web e impressão (RGB, CMYK, PNG, JPG,
                  PDF)
                </span>
              </li>
              <li>
                <CheckIcon className="mr-[7px]" /> O arquivo original, editável
                (ex. AI)
              </li>
              <li className="flex">
                <CheckIcon className="mr-[7px] h-full" />
                <span>
                  100% garantia de satisfação ou o seu dinheiro de volta
                </span>
              </li>
            </ul>
            <button className="bg-black text-white text-[16px] w-full px-[24px] py-[9px] rounded-3xl font-sans">
              Selecione um pacote
              <ArrowDownIcon className="ml-[10px]" boxSize={4} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutScreen;
