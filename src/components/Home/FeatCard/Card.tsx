import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  desc: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, desc, image, className}) => {
  return (
    <div className={`flex flex-col justify-between items-center max-w-[385px] px-8 py-14 ${className}`}>
      <Image src={image} alt="tes" className="max-h-[200px] w-auto" />
      <div className="text-center">
        <h1 className="text-[28px] font-medium mb-[10px] text-[#5569B2]">{title}</h1>
        <p className="text-[16px]">{desc}</p>
      </div>
    </div>
    )
}

export default Card;