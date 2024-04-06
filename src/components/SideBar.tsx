import { HamburgerIcon, Icon, PhoneIcon, QuestionIcon } from "@chakra-ui/icons";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaHouse, FaUsersViewfinder } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

interface SideBarProps {
  openSideBar: boolean;
}

export function SideBar({ openSideBar }: SideBarProps) {
  return (
    <div className="flex h-full">
      <div
        className={`${
          openSideBar ? "lg:w-[350px] md:w-[250px] max-h-[100%]" : "w-0 max-h-0"
        } bg-white shadow-2xl z-10 transition-all duration-500 overflow-hidden`}
      >
        <div className="px-[24px] py-[16px]">
          <div className="flex flex-col justify-center gap-[15px] text-[16px] font-semibold min-w-[200px]">
            <a href="#">
              <Icon className="mr-[15px]" as={FaHouse} />
              Início
            </a>
            <a href="#">
              <HamburgerIcon className="mr-[15px]" />
              Pesquisar categorias
            </a>
            <a href="#">
              <Icon className="mr-[15px]" as={AiFillThunderbolt} />
              Como funciona
            </a>
            <a href="#">
              <Icon className="mr-[15px]" as={FaUsersViewfinder} />
              Encontre um designer
            </a>
            <a href="#">
              <Icon className="mr-[15px]" as={FaLightbulb} />
              Inspiração
            </a>
            <a href="#">
              <Icon className="mr-[15px]" as={FaIndustry} />
              Pro
            </a>
          </div>
        </div>
        <hr className="mt-[10px] mb-[10px]" />
        <div className="px-[24px] py-[16px]">
          <div className="flex flex-col gap-[25px] min-w-[200px]">
            <span className="font-semibold">Serviços de design</span>
            <a href="#">Concursos de design</a>
            <a href="#">Projetos 1 para 1</a>
            <a href="#">Encontre um designer</a>
            <a href="#">Veja inspirações</a>
            <a href="#">Pro</a>
            <a href="#">99designs Studio</a>
            <a href="#">99designs Select</a>
          </div>
          <hr className="mt-[10px] mb-[10px]" />
          <div className="flex flex-col gap-[25px] min-w-[250px]">
            <span className="font-semibold">Quero um design</span>
            <a href="#">Designs de logotipos</a>
            <a href="#">Cartão de visita</a>
            <a href="#">Design de site</a>
            <a href="#">Manual de identidade</a>
            <a href="#">Pesquisar todas as categorias</a>
          </div>
          <hr className="mt-[10px] mb-[10px]" />
          <div className="flex flex-col gap-[25px] min-w-[200px]">
            <span className="font-semibold">Suporte</span>
            <a href="#">
              <PhoneIcon className="mr-[15px]" />
              +1 877 834 4534
            </a>
            <a href="#">
              <QuestionIcon className="mr-[15px]" />
              Central de Ajuda
            </a>
          </div>
          <hr className="mt-[10px] mb-[10px]" />
          <div className="flex flex-col gap-[25px] min-w-[200px]">
            <span className="font-semibold">Recursos</span>
            <a href="#">Preços</a>
            <a href="#">Torne-se um designer</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
}
