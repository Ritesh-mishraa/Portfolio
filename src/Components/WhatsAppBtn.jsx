import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppBtn.css";

const WhatsAppBtn = () => {
  const phoneNumber = "+918948360380" ; 
  const message = "Hello Ritesh! I saw your portfolio and would like to connect.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppBtn;