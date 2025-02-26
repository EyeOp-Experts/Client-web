import Image from "next/image";
import Link from "next/link";

export default function SurgeryCard({ image, title, link, index }) {
  return (
    <div className={`shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 ${
      index % 2 === 0 ? "bg-white" : "bg-blue-100"
    }`}>
      <div className="relative w-full h-60 md:h-72">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <Link
          href={link}
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300 inline-block mt-2"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
