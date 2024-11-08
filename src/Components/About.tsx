import Aboutbackground from "../assets/about-background.png";
import acai from "../assets/umAcai.png"
export default function About(){
    return(
        <>
            <div className="mt-[20rem] relative flex items-center justify-between about">
                <div className="absolute left-[-110px] z-[-2]">
                    <img src={Aboutbackground} alt="" />
                </div>
                <div className="about-img mr-[1rem]">
                    <img src={acai} alt="" />
                </div>
                <div className="flex flex-[0.9] mr-[1rem] flex-col about-text">
                    <p className="font-bold text-[1.15rem] text-[#fe9e0d]">Sobre</p>
                    <h1 className="h1">O açaí é uma fruta rica em antioxidantes, fibras e nutrientes </h1>
                    <p className="p max-w-[500px] text-[#6a6a6a]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem reiciendis, commodi soluta eum ut ea sint praesentium.
                    </p>
                    <p className="p max-w-[500px] text-[#6a6a6a]">
                        nesciunt dignissimos fugit ipsam necessitatibus! Maiores quam officiis, asperiores dicta et consequatur!
                    </p>
                </div>
            </div>
        </>
    )
}