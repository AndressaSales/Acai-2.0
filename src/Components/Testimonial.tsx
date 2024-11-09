import { Avatar } from "@mui/material"
import { AiFillStar } from "react-icons/ai"

export default function Testimonial(){
    return(
        <>
            <div className="mt-[15rem] testimonial">
                <div className="flex justify-center items-center flex-col">
                    <p className="font-bold text-[#fe9e0d] text-[1.15rem]">Depoimento</p>
                    <h1 className="text-[#6a6a6a] max-w-[600px] h1-tes">O Que Estão Dizendo</h1>
                    <p className="max-w-[500px] color-[#6a6a6a] p-text-tes">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus porro fugit reprehenderit debitis repudiandae enim voluptatibus.
                    </p>
                </div>
                <div className="mt-[2rem] bg-[#fff] flex justify-center max-w-[750px] rounded-[2rem] flex-col text-center tes-button items-center">
                    <Avatar >Ms</Avatar>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, minus odio laudantium velit modi deleniti pariatur, consequatur, hic cum quam distinctio atque consectetur cupiditate suscipit repellendus molestiae magni natus mollitia.
                    </p>
                    <div className="text-[1.5rem] text-[#fe920d] svg flex-row flex justify-center items-center p-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <h2 className="ml-[1.5rem]">Marie Silva</h2>
                </div>
            </div>
        </>
    )
}