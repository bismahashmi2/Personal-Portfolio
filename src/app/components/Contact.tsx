"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, slideInLeft, slideInRight } from "@/utils/animations";
import { FaEnvelope } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error message when user starts typing again
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null); // Clear previous errors

    // Client-side validation
    if (!formData.name.trim()) {
      setErrorMessage("Name is required.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Message is required.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setErrorMessage(
          responseData.message || "Failed to send message. Please try again."
        );
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000); // Reset status after 5 seconds
      } else {
        setStatus("success");
        setErrorMessage(null); // Clear any error message on success
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000); // Reset status after 5 seconds
    }
  };

  return (
    <section id="contact" className="container max-w-7xl mx-auto py-20">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
      <motion.h1 
      variants={fadeInUp}
      className="text-4xl font-bold mb-8 text-center">
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <motion.div 
        variants={slideInLeft}
        className="space-y-8" >

          <motion.div
          variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p className="text-slate-300 md:w-2/3">
            I&apos;m open to internship opportunities, collaborations, and projects related to frontend development and AI-assisted systems. Feel free to reach out if you&apos;d like to discuss ideas or work together.
            </p>
          </motion.div>

          <motion.div
          variants={fadeIn}
          className="space-y-4">

            <motion.div 
            variants={fadeInUp}
            whileHover={{ x: 5 }}
            className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-cyan-400" />
              <h3 className="font-semibold">Email</h3>
            </motion.div>

            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="text-slate-300 hover:text-cyan-400"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
            </a>
          </motion.div>
        </motion.div>

        {/* contact form */}
        <motion.div 
        variants={slideInRight}
        className="bg-slate-800 p-6 rounded-lg shadow-md">

          <motion.form onSubmit={handleSubmit} 
          variants={fadeIn}
          className="space-y-6">

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Name
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 sm:text-sm"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 sm:text-sm"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message"
                className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 sm:text-sm"
              ></textarea>
            </motion.div>

            <motion.button
             whileHover={{ scale: 1.02 }}
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-cyan-400 text-white px-4 py-2 rounded-lg hover:bg-cyan-400/90 transition-colors disabled:bg-slate-500"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p 
               className="text-green-500"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}>Message sent successfully!</motion.p>
            )}
            {errorMessage && <motion.p className="text-red-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            >{errorMessage}</motion.p>}
          </motion.form>
        </motion.div>
      </div>
        </motion.div>
    </section>
  );
};

export default Contact;
