import Image from "next/image"
import swirl from "../../../../public/home/swirl1.png"
import swirl2 from "../../../../public/home/swirl2.png"

export default function Decor() {
    return (
      <div className="absolute h-full flex justify-center gap-x-[700px] mb-[450px] items-center overflow-hidden">
        <Image
          src={swirl}
          alt="swirl"
          className="h-[675px] w-[auto] -scale-x-100 rotate-[-130deg] max-lg:hidden"
        />
        <Image
          src={swirl2}
          alt="swirl"
          className="h-[675px] w-auto rotate-[120deg] max-lg:hidden mt-[250px]"
        />
      </div>
    );
  }