import vid from "../../../public/home/tes.webm";

export default function Header() {
  return (
      <div className="bg-[#5569B2] flex justify-center w-full items-center">
        <video src={vid} className="flex items-center justify-center w-full opacity-60 h-screen object-cover bg-fixed" autoPlay muted loop />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center drop-shadow-2xl">
          <h1 className="text-[40px] max-md:text-[25px] font-bold">DIGITAL MARKETING AGENCY</h1>
          <p className="text-[40px] max-md:text-[25px] font-light">SHIN IRO</p>
        </div>
      </div>
  );
}