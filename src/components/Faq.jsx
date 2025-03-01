"use client";
import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const faqData = [
    {
      id: "panel1",
      question: "What are the most common eye surgeries available in Delhi NCR?",
      answer:
        "The most common eye surgeries in Delhi NCR include LASIK for vision correction, cataract surgery, glaucoma treatment, and retinal procedures. We provide expert consultations and partner with top eye hospitals and clinics across the region.",
    },
    {
      id: "panel2",
      question: "How to find the best eye surgeon in Delhi NCR for LASIK or cataract surgery?",
      answer:
        "When choosing an eye surgeon, consider experience, success rates, and patient reviews. We connect patients with leading eye specialists in Delhi NCR for LASIK, cataract removal, and advanced vision correction procedures.",
    },
    {
      id: "panel3",
      question: "Is LASIK eye surgery safe and available in Delhi NCR?",
      answer:
        "Yes, LASIK eye surgery is a safe and effective laser procedure for vision correction. Our network includes advanced LASIK centers in Delhi NCR that use cutting-edge technology for high precision and minimal recovery time.",
    },
    {
      id: "panel4",
      question: "What is the cost of cataract surgery in Delhi NCR?",
      answer:
        "The cost of cataract surgery in Delhi NCR depends on the type of intraocular lens (IOL) used and the hospital’s facilities. We help patients compare costs and choose the best options based on budget and requirements.",
    },
    {
      id: "panel5",
      question: "What are the best treatments for glaucoma in Delhi NCR?",
      answer:
        "Glaucoma treatment includes medications, laser therapy, and surgical interventions. We provide expert guidance and referrals to top glaucoma specialists in Delhi NCR to help manage eye pressure and prevent vision loss.",
    },
    {
      id: "panel6",
      question: "How do I book an eye checkup appointment in Delhi NCR?",
      answer:
        "Booking an eye consultation is easy through our online appointment system. We partner with multiple eye hospitals and clinics in Delhi NCR to offer convenient slots for comprehensive eye exams and surgical evaluations.",
    },
    {
      id: "panel7",
      question: "What are the latest advancements in eye surgery available in Delhi NCR?",
      answer:
        "Delhi NCR offers advanced eye surgeries such as robotic-assisted LASIK, bladeless cataract surgery, and minimally invasive glaucoma procedures. We connect patients with hospitals using state-of-the-art technology for optimal results.",
    },
    {
      id: "panel8",
      question: "Are there specialized pediatric eye care services in Delhi NCR?",
      answer:
        "Yes, pediatric eye specialists in Delhi NCR treat conditions like squint correction, amblyopia (lazy eye), and congenital cataracts. We help parents find the best pediatric ophthalmologists for early diagnosis and treatment.",
    },
    {
      id: "panel9",
      question: "Does health insurance cover eye surgeries in Delhi NCR?",
      answer:
        "Many health insurance plans in India cover LASIK, cataract surgery, and glaucoma treatments. We assist patients in verifying insurance eligibility and finding eye hospitals in Delhi NCR that offer cashless treatment options.",
    },
    {
      id: "panel10",
      question: "Which are the best eye hospitals and clinics in Delhi NCR?",
      answer:
        "Delhi NCR has numerous top-rated eye hospitals and clinics specializing in LASIK, cataract surgery, and retinal treatments. We provide recommendations based on patient needs, treatment quality, and hospital ratings.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-[#fef9e7] to-[#fef9e7] rounded-xl shadow-xl">
      {/* 🔹 Heading */}
      <Typography variant="h4" className="text-center mb-6 font-bold text-blue-900">
        Frequently Asked Questions
      </Typography>

      {faqData.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.id}
          onChange={handleChange(faq.id)}
          className="mb-4 bg-white shadow-md rounded-lg"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-blue-600" />}
            aria-controls={`${faq.id}-content`}
            id={`${faq.id}-header`}
            className="bg-[#D3D3D3] hover:bg-[#b1b6ba] transition-all rounded-lg px-4 py-2"
          >
            <Typography className="font-semibold text-gray-900">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white px-4 py-2 rounded-lg">
            <Typography className="text-gray-700">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
