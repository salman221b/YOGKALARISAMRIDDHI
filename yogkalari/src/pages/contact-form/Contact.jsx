import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import ScrollToTop from "../../components/ScrollToTop";
import Marquee from "./Marquee";

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const filteredValue =
      name === "phone" || name === "whatsapp"
        ? value.replace(/\D/g, "")
        : value;
    setFormData({ ...formData, [name]: filteredValue });
  };

  // Validate fields before submit
  const validateForm = () => {
    const newErrors = {};

    if (!formData.category) newErrors.category = "Please select a category.";
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length < 7) {
      newErrors.phone = "Phone number is too short.";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Please fill all required fields correctly.",
        confirmButtonColor: "#065F46",
      });
      return;
    }

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
          setErrors({});
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
    setErrors({});
  };

  return (
    <section className="pt-30 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
        {/* Left Card - 40% */}
        <div className="md:col-span-5 bg-[#EDEAE0] rounded-2xl shadow-md p-8 md:p-12 text-[#084C2E]">
          <h2
            className="text-6xl font-semibold leading-tight mb-6 "
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            DISCUSS <br /> WITH <br /> US
          </h2>
          <p className="font-semibold text-lg mb-6">
            Don&apos;t be afraid. Say hello!
          </p>

          <div className="mb-4">
            <p className="font-semibold ">Phone</p>
            <a href="tel:+971563440979" className=" hover:underline">
              +971 563440979
            </a>
          </div>

          <div>
            <p className="font-semibold">Gmail</p>
            <a
              href="mailto:yogkalarisamriddhi@gmail.com"
              className=" hover:underline"
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
              <div>
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
                {errors.category && (
                  <p className="text-red-500 text-sm">{errors.category}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Enter your WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Enter your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleClear}
                className="px-6 py-2 border border-[#084C2E] text-[#084C2E] rounded-full hover:bg-[#084C2E] hover:text-white"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#084C2E] text-white rounded-full hover:bg-green-900"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-20">
        <Marquee />
      </div>
      <ScrollToTop />
    </section>
  );
};

export default ContactForm;
