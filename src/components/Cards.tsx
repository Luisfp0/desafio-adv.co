import { Image, Text } from "@chakra-ui/react";
import { StarIcon, CheckIcon } from "@chakra-ui/icons";
import comece from "../assets/comece.png";
import A from "../assets/A.png";
import verificar from "../assets/verificar.png";
import teste from "../assets/7147601-manchetes-conceito-icone-copywriting-ideia-linha-fina-ilustracao-publicidade-e-promocao-textos-ferramentas-de-marketing-isolado-esboco-desenho-vetor.jpg";
import cassino from "../assets/casino.png";
import computer from "../assets/computer.png";
import midiaSocial from "../assets/midia-social.png";
import contentIconNew from "../assets/content-icon-new.png";
import letter from "../assets/letter.png";
import fishImage from "../assets/logo-01.avif";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-start relative">
      <figure className="lg:flex hidden">
        <div className="absolute lg:top-[535px] lg:-right-[280px]">
          <img className="w-[825px] h-[470px]" src={fishImage}></img>
        </div>
      </figure>
      <a
        href="#"
        className="border-b-[1px] lg:border-l-0 border-l-[1px] hover:text-black"
      >
        <div className="p-[20px] bg-white box-border lg:w-[469px] md:w-[768px] hover:scale-105 hover:shadow-2xl transition shadown-none">
          <div>
            <div className="flex items-center justify-center px-[10px] w-[140px] mb-[15px] py-[4px] bg-[#01a1c1] rounded-xl">
              <StarIcon className="mr-[10px]" color={"white"} />
              <Text className="text-white">Mais Popular</Text>
            </div>
            <div className="flex">
              <Image src={comece} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col ml-[7px]">
                <h2 className="text-[19px] font-semibold">
                  Logotipo e identidade pessoal
                </h2>
                <div className="flex gap-[10px]">
                  <span className="text-[16px]">A partir de US$ 599</span>
                  <span className="text-[16px] px-[7px] border-[1px] text-[#01a1c1] border-[#01a1c1] rounded-md">
                    Economize 39%+
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[10px] lg:w-[430px] text-[14px]">
              <span>
                Logotipo e principais itens digitais e impressos dos quais você
                precisa para começar sua marca com o pé direito
              </span>
              <ul className="pt-[7px]">
                <li>
                  <CheckIcon className="mr-[7px]" /> Logotipo
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Cartão de visita
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Papel Timbrado e envelope
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Capa para facebook
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
      <a href="#" className=" border-l-[1px] border-b-[1px] hover:text-black">
        <div className="hover:scale-105 hover:shadow-2xl transition shadown-none bg-white h-full box-border p-[20px] lg:w-[234px] md:w-[384px]">
          <div>
            <div>
              <Image src={A} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col mt-[10px]">
                <h2 className="text-[19px] font-semibold">
                  Design de logotipos
                </h2>
                <span className="text-[16px]">A partir de US$ 299</span>
              </div>
            </div>
            <div className="mt-[10px] text-[14px]">
              <span>Um logotipo inesquecível personalizado para sua marca</span>
            </div>
          </div>
        </div>
      </a>
      <a href="#" className="hover:text-black border-l-[1px] border-b-[1px]">
        <div className="hover:scale-105 hover:shadow-2xl transition shadown-none bg-white h-full box-border p-[20px] lg:w-[234px] md:w-[384px]">
          <div>
            <div>
              <Image src={verificar} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col mt-[10px]">
                <h2 className="text-[19px] font-semibold">Cartão de visita</h2>
                <span className="text-[16px]">A partir de US$169</span>
              </div>
            </div>
            <div className="mt-[10px] text-[14px]">
              <span>
                Um cartão exclusivo criado para construir relacionamento
              </span>
            </div>
          </div>
        </div>
      </a>
      <a
        href="#"
        className=" hover:text-black border-b-[1px] lg:border-l-0 border-l-[1px]"
      >
        <div className=" hover:scale-105 hover:shadow-2xl transition shadown-none bg-white box-border p-[20px] lg:w-[469px] md:w-[768px]">
          <div>
            <div className="flex">
              <Image src={teste} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col ml-[7px]">
                <h2 className="text-[19px] font-semibold">
                  Logotipo e manual da marca
                </h2>
                <span className="text-[16px]">A partir de US$ 429</span>
                <span className="text-[16px] w-[161px] px-[7px] border-[1px] text-[#01a1c1] border-[#01a1c1] rounded-md">
                  Economize US$ 70
                </span>
              </div>
            </div>
            <div className="mt-[10px] lg:w-[430px] text-[14px]">
              <span>
                Leve o design do seu logotipo a outro patamar com uma marca de
                verdade combinando fontes, cores e estilos
              </span>
              <ul className="pt-[7px]">
                <li>
                  <CheckIcon className="mr-[7px]" /> Logotipo
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Manual de identidade da
                  marca
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
      <a
        href="#"
        className="hover:text-black hover:scale-105 hover:shadow-2xl transition shadown-none bg-white border-l-[1px] border-b-[1px]"
      >
        <div className="box-border p-[20px] lg:w-[469px] md:w-[768px]">
          <div>
            <div className="flex">
              <Image src={cassino} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col ml-[7px]">
                <h2 className="text-[19px] font-semibold">
                  Logotipo e cartão de visita
                </h2>
                <span className="text-[16px]">A partir de US$ 449</span>
                <div className="text-[16px] w-[160px] px-[7px] border-[1px] text-[#01a1c1] border-[#01a1c1] rounded-md">
                  Economize US$ 49
                </div>
              </div>
            </div>
            <div className="mt-[10px] lg:w-[430px] text-[14px]">
              <span>Um logotipo e cartão de visita</span>
              <ul className="pt-[7px]">
                <li>
                  <CheckIcon className="mr-[7px]" /> Logotipo
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Cartão de visita
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
      <a
        href="#"
        className="hover:text-black hover:scale-105 hover:shadow-2xl transition shadown-none bg-white border-b-[1px] lg:border-l-0 border-l-[1px]"
      >
        <div className="box-border p-[20px] lg:w-[469px] md:w-[768px]">
          <div>
            <div className="flex">
              <Image src={computer} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col ml-[7px]">
                <h2 className="text-[19px] font-semibold">Logotipo e site</h2>
                <span className="text-[16px]">A partir de US$ 1399</span>
                <div className="text-[16px] w-[162px] px-[7px] border-[1px] text-[#01a1c1] border-[#01a1c1] rounded-md">
                  Economize US$ 300
                </div>
              </div>
            </div>
            <div className="mt-[10px] lg:w-[430px] text-[14px]">
              <span>
                Um logotipo personalizado e um site Squarespace que combina com
                sua marca
              </span>
              <ul className="pt-[7px]">
                <li>
                  <CheckIcon className="mr-[7px]" /> Logotipo
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> site Squarespace totalmente
                  funcional e personalizado
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Conteúdo enviado para você
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
      <figure className="lg:hidden md:flex">
        <div className="flex flex-col items-center justify-center mt-[50px]">
          <img src={fishImage} />
          <span className="py-[50px]">pordalibor πych</span>
        </div>
      </figure>
      <div className="w-[500px]"></div>
      <a
        href="#"
        className="hover:text-black border-b-[1px] lg:border-l-0 border-l-[1px]"
      >
        <div className="box-border hover:scale-105 hover:shadow-2xl transition shadown-none bg-white p-[20px] md:w-[768px] lg:w-[469px]">
          <div>
            <div className="flex">
              <Image src={midiaSocial} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col ml-[7px]">
                <h2 className="text-[19px] font-semibold">
                  Logotipo e rede social
                </h2>
                <span className="text-[16px]">A partir de US$ 399</span>
                <div className="text-[16px] w-[162px] px-[7px] border-[1px] text-[#01a1c1] border-[#01a1c1] rounded-md">
                  Economize US$ 137
                </div>
              </div>
            </div>
            <div className="mt-[10px] lg:w-[430px] text-[14px]">
              <span>
                Logotipo e capas das redes sociais para deixar sua impressão
                online
              </span>
              <ul className="pt-[7px]">
                <li>
                  <CheckIcon className="mr-[7px]" /> Logotipo
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Capa para Facebook
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Capa para Twitter
                </li>
                <li>
                  <CheckIcon className="mr-[7px]" /> Capa para YouTube
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
      <div className="md:w-0 lg:w-[500px] border-b-[1px]"></div>
      <a
        href="#"
        className=" border-b-[1px] lg:border-l-0 border-l-[1px] hover:text-black"
      >
        <div className="h-full box-border p-[20px] lg:w-[234px] md:w-[380px] hover:scale-105 hover:shadow-2xl transition shadown-none bg-white">
          <div>
            <div>
              <Image src={contentIconNew} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col mt-[10px]">
                <h2 className="text-[19px] font-semibold">
                  Manual de identidade da marca
                </h2>
                <span className="text-[16px]">A partir de US$ 299</span>
              </div>
            </div>
            <div className="mt-[10px] text-[14px]">
              <span>
                Um guia completo com fontes, cores e o estilo da sua marca
              </span>
            </div>
          </div>
        </div>
      </a>
      <a href="#" className="border-l-[1px] border-b-[1px] hover:text-black">
        <div className="h-full box-border p-[20px] lg:w-[234px] md:w-[380px] hover:scale-105 hover:shadow-2xl transition shadown-none bg-white">
          <div>
            <div>
              <Image src={letter} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col mt-[10px]">
                <h2 className="text-[19px] font-semibold">Papelaria</h2>
                <span className="text-[16px]">A partir de US$ 199</span>
              </div>
            </div>
            <div className="mt-[10px] text-[14px]">
              <span>
                Papel timbrado e envelope para enviar mensagens de sua marca
              </span>
            </div>
          </div>
        </div>
      </a>
      <a href="#" className="hover:text-black border-l-[1px] border-b-[1px]">
        <div className="box-border p-[20px] h-full lg:w-[469px] md:w-[768px] hover:scale-105 hover:shadow-2xl transition shadown-none bg-white">
          <div>
            <div className="flex">
              <Image src={comece} className="w-[70px] h-[70px]"></Image>
              <div className="flex flex-col ml-[7px]">
                <h2 className="text-[19px] font-semibold">
                  Full-Service Brand Pack
                </h2>
                <span className="text-[16px]">A partir de US$ 3,999</span>
              </div>
            </div>
            <div className="mt-[10px] lg:w-[430px] text-[14px]">
              <span>
                A estrategicaly created brand identity guided by your personal
                Creative Director from 99Design Studio
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Cards;
