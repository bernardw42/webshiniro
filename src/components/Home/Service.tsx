import Image from "next/image"
import img from "../../../public/home/tes.png"
import img2 from "../../../public/home/tes2.png"
import img3 from "../../../public/home/tes3.png"
import swirl from "../../../public/home/swirl1.png"
import swirl2 from "../../../public/home/swirl2.png"
import Link from "next/link"

import Card from "./ServiceCard/Card"

const CardData = [
    {
        title:"DIGITAL CONSULTANCY",
        desc:"We've developed an approach to shaping digital strategies for our clients that result in defining prioritized  cost- effective solutions that deliver a measurable Return on Investment (ROI).",
        image:img
    },
    {
        title:"CONVERSION RATE OPTIMIZATION",
        desc:"We've developed an asdasdasdasdasd approach to shaping digital strategies for our client that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment",
        image:img2
    },
    {
        id:"asdasdqwr",
        title:"ONLINE REPUTATION MANAGEMENT",
        desc:"We've developed an approach to shaping digital strategies for our clients that result in defining prioritized  cost-effective solutions that deliver a.",
        image:img3 
    }
]
export default function Service(){
    return(
        <div className="relative flex flex-col justify-center items-center gap-x-[50px] bg-white w-full text-center pt-[200px]">
            {/* <div className="absolute min-h-[675px] max-h-[675px] w-auto">
                <Image src={swirl} alt="swirl" className="-scale-x-100 rotate-[-130deg] left-[-15%] top-[20%] max-lg:hidden"></Image>
                <Image src={swirl2} alt="swirl" className="rotate-[120deg] right-[-21%] top-[25%] max-lg:hidden"></Image>
            </div> */}
            <div className="flex justify-center flex-wrap gap-y-[50px] items-center gap-x-[50px] text-center mb-[200px] px-8">
                {CardData.map((CardDetail)=>
                    <Card key={CardDetail.title} {...CardDetail}></Card>
                )}
            </div>
            <div className="flex bg-[#F9F9F9] w-full justify-center gap-y-[10px] items-center flex-col pt-[150px] pb-[150px]">
                <h1 className="font-semibold text-[25px] max-w-6xl text-[#5569B2] px-4">GROW TRAFFIC & INCREASE REVENUE</h1>
                <h2 className="font-extrabold text-[60px] max-w-6xl text-[#5569B2] px-4">Appear On Front Page of Google!</h2>
                <p className="font-normal text-[20px] max-w-6xl px-4">We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.</p>
            </div>
        </div>
    )
}