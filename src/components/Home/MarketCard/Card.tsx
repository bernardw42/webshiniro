import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, image, className}) => {
  return (
    <div className={`flex flex-col justify-center items-center bg-white gap-y-[20px] min-w-[350px] max-w-[350px] min-h-[450px] max-h-[450px] rounded-lg drop-shadow-2xl px-8 py-14 ${className}`}>
      <Image src={image} alt="tes" className="max-h-[200px] w-auto" />
      <div className="text-center">
        <h1 className="text-[20px] font-semibold mb-[10px] text-[#5569B2]">{title}</h1>
      </div>
    </div>
    )
}

export default Card;