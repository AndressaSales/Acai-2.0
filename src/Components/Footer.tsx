import logo from "../assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
export default function Footer(){
    return(
        <>
            <div className="flex mt-[10rem] footer">
                <div>
                    <div className="max-w-[110px]">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="flex">
                        <BsTwitter className="text-[1.5rem] text-[#585858] mr-[1.25rem]" />
                        <BsYoutube className="text-[1.5rem] text-[#585858] mr-[1.25rem]" />
                        <SiLinkedin  className="text-[1.5rem] text-[#585858] mr-[1.25rem]"/>
                        <FaFacebookF />
                   </div>
                </div>        
                    <div className="flex-1 flex justify-end footer-two">
                        <div className="flex flex-col min-w-[190px] footer-col">
                            <span>Qualidade</span>
                            <span>Ajuda</span>
                            <span>Compartilha</span>
                            <span>Carreiras</span>
                            <span>Contatos</span>
                        </div>
                        <div className="flex flex-col min-w-[190px] footer-col">
                            <span>(81) 9 1111-1111</span>
                            <span>ola@food.com</span>
                            <span>impresa@foot.com</span>
                            <span>contatos@food.com</span>
                        </div>
                        <div className="flex flex-col min-w-[190px] footer-col">
                            <span>Termos & Condições</span>
                            <span>Política de Privacidade</span>
                        </div>
                    </div>
            </div>
        </>
    )
}