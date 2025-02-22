"use client"
// components/FormButton.js
import React, { useState } from "react";
import { Modal, IconButton, CircularProgress } from "@mui/material";
import { Close } from "@mui/icons-material"; // Import close icon
import Form from "@/components/Form"; // Import your Form component

const FormButton = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  // Open the modal
  const handleOpen = () => setOpen(true);

  // Close the modal
  const handleClose = () => {
    if (!isSubmitting) {
      setOpen(false); // Only close if not submitting
    }
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set loading state

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Submit the form data to Basin
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        // console.log("Form submitted successfully!");
        handleClose(); // Close the modal after successful submission
      } else {
        // console.error("Form submission failed.");
      }
    } catch (error) {
    //   console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <>
      {/* Fixed Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={handleOpen}
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 font-semibold text-sm uppercase tracking-wide"
        >
          Get Call Now
        </button>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose} // Close modal on backdrop click or Escape key
        aria-labelledby="form-modal"
        aria-describedby="form-modal-description"
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto relative">
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              className="absolute top-2 right-2"
              aria-label="close"
            >
              <Close />
            </IconButton>

            {/* Form */}
            <Form onSubmit={handleFormSubmit} />

            {/* Loading Spinner */}
            {isSubmitting && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
                <CircularProgress />
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FormButton;