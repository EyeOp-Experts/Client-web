"use client"; 
import Head from 'next/head';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Swathya Health | Trusted Eye Care in Delhi NCR</title>
                <meta name="description" content="Learn more about Swathya Health, your trusted source for expert eye care and advanced treatments in Delhi, Noida, Gurugram, and beyond." />
            </Head>
            <section className="max-w-5xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-blue-900 mb-6">About Swathya Health</h1>
                <p className="text-lg text-gray-700 mb-4">
                    At <strong>Swathya Health</strong>, we are committed to providing world-class eye care and health solutions across Delhi NCR — including Noida, Gurugram, Faridabad, and Greater Noida. With a patient-first approach, we connect individuals to experienced medical professionals who specialize in advanced treatments such as LASIK surgery, retina care, pediatric eye care, and corneal transplants.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Our goal is to make high-quality, affordable healthcare accessible to everyone. Whether you are searching for reliable LASIK surgery in Delhi or expert pediatric ophthalmologists in Noida, Swathya Health is your trusted guide. We ensure that every patient receives personalized care backed by the latest medical technology.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    We also focus on patient education through regularly updated blogs and resources to help you make informed decisions about your health. Your vision and wellness are our top priorities.
                </p>
                <p className="text-lg text-gray-700">
                    Discover compassionate care, expert guidance, and advanced treatment — only at Swathya Health.
                </p>
            </section>
        </>
    );
}
