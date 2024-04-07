import logo from "../assets/wordmark_grey.svg";
import { RefObject } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { HamburgerIcon, PhoneIcon, QuestionIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaHouse } from "react-icons/fa6";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: RefObject<HTMLButtonElement> =
    React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="overflow-x-auto">
          <DrawerCloseButton />
          <DrawerHeader>
            <div className="flex flex-col justify-center gap-[15px] text-[16px] font-semibold">
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
          </DrawerHeader>
          <hr className="mt-[10px] mb-[10px]"></hr>
          <div className="h-auto px-[24px] py-[16px]">
            <div className="flex flex-col gap-[25px]">
              <span className="font-semibold">Serviços de design</span>
              <a href="#">Concursos de design</a>
              <a href="#">Projetos 1 para 1</a>
              <a href="#">Encontre um designer</a>
              <a href="#">Veja inspirações</a>
              <a href="#">Pro</a>
              <a href="#">99designs Studio</a>
              <a href="#">99designs Select</a>
            </div>
            <hr className="mt-[10px] mb-[10px]"></hr>
            <div className="flex flex-col gap-[25px]">
              <span className="font-semibold">Quero um design</span>
              <a href="#">Designs de logotipos</a>
              <a href="#">Cartão de visita</a>
              <a href="#">Design de site</a>
              <a href="#">Manual de identidade</a>
              <a href="#">Pesquisar todas as categorias</a>
            </div>
            <hr className="mt-[10px] mb-[10px]"></hr>
            <div className="flex flex-col gap-[25px]">
              <span className="font-semibold">Suporte</span>
              <a href="#">
                <Icon className="mr-[15px]" as={PhoneIcon} />
                +1 877 834 4534
              </a>
              <a href="#">
                <Icon className="mr-[15px]" as={QuestionIcon} />
                Central de Ajuda
              </a>
            </div>
            <hr className="mt-[10px] mb-[10px]"></hr>
            <div className="flex flex-col gap-[25px]">
              <span className="font-semibold">Recursos</span>
              <a href="#">Preços</a>
              <a href="#">Torne-se um designer</a>
              <a href="#">Blog</a>
              <a href="#">Pesquisar todas as categorias</a>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <div className="container mx-auto flex justify-center items-center w-full lg:max-w-[1200px] md:max-w-[768px] max-w-[540px] h-[80px]">
        <div className="px-[15px] py-[20px] flex items-center w-full justify-between">
          <div className="md:flex lg:hidden">
            <Button ref={btnRef} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
          </div>
          <a href="#">
            <Image src={logo} alt="Logo 99designs"></Image>
          </a>
          <div className="flex gap-[25px]">
            <nav className="lg:flex hidden pl-[45px] list-none gap-[25px] text-bold">
              <li>
                <a href="#">Categorias</a>
              </li>
              <li>
                <a href="#"> Como funciona</a>
              </li>
              <li>
                <a href="#">Encontre um designer</a>
              </li>
              <li>
                <a href="#">Inspiração</a>
              </li>
              <li>
                <a href="#">Pro</a>
              </li>
            </nav>
            <a href="#" className="lg:flex items-center justify-center hidden">
              <PhoneIcon className="mr-[5px]" />
              +1 877 834 4534
            </a>
            <a href="#">Fazer Login</a>
          </div>
        </div>
      </div>
    </>
  );
}
