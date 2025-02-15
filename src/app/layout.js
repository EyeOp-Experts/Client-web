import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sushruta Consultancy",
  description: "The best eye care consultancy services which will provide many benefits for patients who are looking for any kind of eye surgery under their budget. We have connections with many hospital in Delhi-NCR which include cities like Noida, Greater Noida, Gurugram & Faridabad. We do all of this service for free and will took no extra charges from you.",
  keywords: ""
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="mt-[0px]">{children}</main>
      </body>
    </html>
  );
}
