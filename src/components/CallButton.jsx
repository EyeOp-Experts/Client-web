"user client"
import React from 'react';
import { Phone } from '@mui/icons-material';

const CallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="tel:+919717384045"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <Phone className="text-white" />
      </a>
    </div>
  );
};

export default CallButton;