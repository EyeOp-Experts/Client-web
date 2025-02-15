import Image from "next/image";
import Link from "next/link";

export default function SurgeryCard({ image, title, link }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
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
