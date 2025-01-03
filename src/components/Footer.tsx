import React from 'react';
import { FaLinkedin, FaDiscord, FaEnvelope, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <section className="py-8 mt-16">
      <div className="container mx-auto px-6">

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-[#007bff]" />
          </a>
          <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={30} className="text-green-700" />
          </a>
          <a href="mailto:abc123@gmail.com">
            <FaEnvelope size={30} className="text-red-700" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-black" />
          </a>
        </div>

        {/* Copyright Line */}
        <div className="text-center font-inter text-[16px] text-[#333333] font-normal">
          <p>&copy; 2024 Tech Blog. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
