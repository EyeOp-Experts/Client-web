import Image from "next/image";
import mainImage from "@/utils/main-image.webp";
import Form from "@/components/Form";

export default function Hero() {
  return (
<section className="relative w-full h-[500px] md:h-screen flex items-center justify-center bg-gray-100 pt-16">

{/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={mainImage}
          alt="Eye Surgery Customer Satisfaction Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          className="brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center relative z-10">
        
        {/* Left Side - Text */}
        <div className="text-white space-y-4 max-w-lg text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            1 Lac+ Happy Customers
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-200">
            We provide the best eye surgery solutions tailored to your budget with top-notch care.
          </p>
        </div>

        {/* Right Side - Form */}
        <Form className="hidden md:block" buttonText={"GET BEST COST"} />
      </div>
    </section>
  );
}
