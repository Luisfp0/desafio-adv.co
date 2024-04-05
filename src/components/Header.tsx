import logo from "../assets/wordmark_grey.svg";
import { PhoneIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

export function Header() {
  return (
    <div className=" container mx-auto flex justify-center items-center w-full max-w-[1150px] h-[80px]">
      <div className="px-[15px] py-[20px] flex items-center w-full">
        <a href="#">
          <Image src={logo} alt="Logo 99designs"></Image>
        </a>
        <div className="flex gap-[25px]">
          <nav className="flex pl-[45px] list-none gap-[25px] text-bold">
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
          <a href="#" className="flex items-center justify-center">
            <PhoneIcon className="mr-[5px]" />
            +1 877 834 4534
          </a>
          <a href="#">Fazer Login</a>
        </div>
      </div>
    </div>
  );
}
