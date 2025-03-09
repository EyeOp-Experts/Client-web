import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Swasthya Health - Best LASIK & Cataract Surgery Consultancy in Delhi NCR",
  description:
    "Looking for the best LASIK, cataract, or refractive eye surgery in Delhi NCR? Swasthya Health connects you with top-rated eye hospitals in Noida, Gurugram, Faridabad & Greater Noida – 100% free consultation with expert guidance.",
  keywords:
    "LASIK surgery Delhi NCR, best eye hospital Delhi, cataract surgery Noida, affordable eye surgery Gurugram, eye specialist Faridabad, laser eye treatment Delhi, PRK surgery, SMILE surgery, vision correction, eye care consultancy, top ophthalmologists in Delhi, glaucoma treatment, corneal transplant Delhi, best refractive surgery, eye surgeon near me, Delhi NCR eye hospitals, astigmatism treatment, myopia correction",

  openGraph: {
    title: "Swasthya Health - Best LASIK & Cataract Surgery Consultancy in Delhi NCR",
    description:
      "Swasthya Health offers expert guidance for LASIK, cataract, and advanced eye surgeries in Delhi NCR. No extra charges, just the best connections to trusted eye hospitals.",
    url: "https://visionpluss.in/",
    siteName: "Swasthya Health",
    images: [
      {
        url: "https://visionpluss.in/images/clinic-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Swasthya Health - LASIK and Cataract Surgery Consultancy",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Swasthya Health - Best LASIK & Cataract Surgery Consultancy in Delhi NCR",
    description:
      "Find the best LASIK and cataract surgery options in Delhi NCR with expert consultancy at Swasthya Health. We connect you to top hospitals in Noida, Gurugram, and Faridabad.",
    images: ["https://visionpluss.in/images/clinic-thumbnail.jpg"],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Set Title and Meta Description for SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Swasthya Health" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />

        {/* Favicon Links - Ensure these files exist in /public folder */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* OpenGraph Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* JSON-LD Schema Markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Swasthya Health",
            url: "https://visionpluss.in/",
            logo: "https://visionpluss.in/images/logo.png",
            description:
              "Swasthya Health provides expert guidance for LASIK, cataract, and refractive eye surgeries in Delhi NCR. Free consultations with top eye surgeons.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Clinic Address",
              addressLocality: "Delhi NCR",
              addressRegion: "Delhi",
              postalCode: "110001",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "customer service",
            },
            areaServed: "Delhi NCR",
            sameAs: [
              "https://www.facebook.com/yourpage",
              "https://twitter.com/yourhandle",
              "https://www.instagram.com/yourprofile",
            ],
          })}
        </script>
      </head>

      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="mt-[0px]">{children}</main>
      </body>
    </html>
  );
}
