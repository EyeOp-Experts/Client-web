import Form from "@/components/Form";

export default function MobileFormSection() {
  return (
    <section className="bg-gray-100 p-6 md:hidden">
      {/* Form Section */}
      <Form title="Get in Touch" buttonText="Request Call" className="mt-6 mx-auto" />

      {/* Supporting Text */}
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mt-6">
        Trusted Eye Surgery Consultants
      </h2>
      <p className="text-center text-gray-700 mt-2">
        Get expert advice and the best eye surgery solutions tailored for you.
      </p>
    </section>
  );
}
