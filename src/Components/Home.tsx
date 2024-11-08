import Navbar from "./Navbar";
import acai from "../assets/tAcai.png";
import { FiArrowRight } from "react-icons/fi";
import banner from "../assets/home-banner-background.png"
export default function Home(){
    return(
        <>
            <Navbar />
            <div className="relative flex pt-[3rem]">
                <div className="absolute top-[-200px] right-[-114px] max-w-[550px] z-[-2] banner-home">
                    <img src={banner} alt="banner" />
                </div>
                <div className="flex-1 flex flex-col justify-center items-start cont">
                    <h1 className="h1">O Melhor Açaí de Toda Região</h1>
                    <p className="p text-[#6a6a6a] max-w-[500px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fuga pariatur dolor ducimus. Maxime quo sint, nulla delectus, eaque nam quam saepe cum sunt itaque repellat, repellendus porro ipsa unde?
                    </p>
                    <button className="button2 flex justify-center items-center text-[#fff] bg-[#fe9e0d] font-semibold rounded-[5rem] text-[1.1rem]hover:bg-[#e48f0f]">
                        Peça Agora <FiArrowRight className="ml-[0.75rem] text-[1.5rem]" />{" "}
                    </button>
                </div>
                <div className="img">
                    <img src={acai} alt="" />
                </div>
            </div>
        </>
    )
}