import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import img from "../../../../public/home/tes.png"
import img2 from "../../../public/home/tes2.png"
import img3 from "../../../public/home/tes3.png"

interface CardProps{
    title:string,
    desc:string,
    image:StaticImageData
}

const Card:React.FC<CardProps> = ({title, desc, image}) => {
    return(
        <div className="flex flex-col justify-between items-center bg-white max-w-[415px] min-h-[650px] max-h-[650px] rounded-lg drop-shadow-2xl px-8 py-14">
            <Image src={image} alt="tes" className="max-h-[240px] w-auto"></Image>
            <div className="text-center"> 
                <h1 className="text-[28px] font-medium mb-[10px] text-[#5569B2]">{title}</h1>
                <p className="text-[16px]">{desc}</p>
            </div>
            <ul>
                <li>
                    <Link href="/services" className="font-semithin text-[17px] text-yellow-600 hover:text-yellow-900 px-5 py-3 transition duration-150 ease-in-out">LEARN MORE</Link>
                </li>
            </ul>
        </div>
    )
}

export default Card;