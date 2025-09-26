import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const filteredValue =
      name === "phone" || name === "whatsapp"
        ? value.replace(/\D/g, "")
        : value;
    setFormData({ ...formData, [name]: filteredValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xq04glg", // EmailJS service ID
        "template_jy2u90d", // Template ID
        formData,
        "XgiLvulQ_qgPGI3Pt" // User ID
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "We’ll get back to you within 24 hours.",
            confirmButtonColor: "#065F46",
          });
          setFormData({
            category: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            whatsapp: "",
            message: "",
          });
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#065F46",
          });
        }
      );
  };

  const handleClear = () => {
    setFormData({
      category: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      whatsapp: "",
      message: "",
    });
  };

  return (
    <section className="py-30 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
        {/* Left Card - 40% */}
        <div className="md:col-span-5 bg-[#EDEAE0] rounded-2xl shadow-md p-8 md:p-12">
          <h2 className="text-5xl font-semibold text-green-900 leading-tight mb-6">
            DISCUSS <br /> WITH <br /> US
          </h2>
          <p className="text-gray-700 mb-6">Don&apos;t be afraid. Say hello!</p>

          <div className="mb-4">
            <p className="font-semibold text-gray-800">Phone</p>
            <a
              href="tel:+971563440979"
              className="text-green-700 hover:underline"
            >
              +971 563440979
            </a>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Gmail</p>
            <a
              href="mailto:yogkalarisamriddhi@gmail.com"
              className="text-green-700 hover:underline"
            >
              yogkalarisamriddhi@gmail.com
            </a>
          </div>
        </div>

        {/* Right Card - 60% */}
        <div className="md:col-span-7 bg-[#EDEAE0] rounded-2xl shadow-md p-8 md:p-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Send us a Message
          </h3>
          <p className="text-gray-600 mb-6">
            Fill out the form below and we&apos;ll get back to you within 24
            hours
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Yoga">Yoga</option>
                <option value="Kalari">Kalari</option>
                <option value="Terrariums">Terrariums</option>
              </select>

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />

              <input
                type="tel"
                name="whatsapp"
                placeholder="Enter your WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleClear}
                className="px-6 py-2 border border-green-800 text-green-800 rounded-full hover:bg-green-50"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-800 text-white rounded-full hover:bg-green-900"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
