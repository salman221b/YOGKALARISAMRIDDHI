import React, { useState } from "react";
import MarqueeBanner from "./MarqueeBanner";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    martialArtsExp: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for phone & whatsapp fields
    const filteredValue =
      name === "phone" || name === "whatsapp"
        ? value.replace(/\D/g, "")
        : value;

    setFormData({ ...formData, [name]: filteredValue });
    validateField(name, filteredValue);
  };

  const validateField = (name, value) => {
    let newError = { ...error };

    switch (name) {
      case "category":
        newError.category = value ? "" : "Please select a category.";
        break;
      case "firstName":
        newError.firstName = value.trim() ? "" : "First name is required.";
        break;
      case "lastName":
        newError.lastName = value.trim() ? "" : "Last name is required.";
        break;
      case "email":
        newError.email = /^\S+@\S+\.\S+$/.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;
      case "phone":
        newError.phone = /^\d{10,}$/.test(value)
          ? ""
          : "Phone number must be at least 10 digits.";
        break;
      case "whatsapp":
        newError.whatsapp = /^\d{10,}$/.test(value)
          ? ""
          : "WhatsApp number must be at least 10 digits.";
        break;
      case "martialArtsExp":
        newError.martialArtsExp = value
          ? ""
          : "Please select your martial arts experience.";
        break;
      default:
        break;
    }

    setError(newError);
    setValid(Object.values(newError).every((msg) => msg === ""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field] && field !== "message") {
        allErrors[field] = "This field is required.";
      }
    });

    if (Object.keys(allErrors).length > 0) {
      setError(allErrors);
      setValid(false);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all required fields correctly!",
        confirmButtonColor: "#2F5C4E",
      });

      return;
    }

    console.log("Form Data:", formData);

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your form has been submitted successfully 🎉",
      confirmButtonColor: "#2F5C4E",
    });

    // Reset form
    setFormData({
      category: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      whatsapp: "",
      martialArtsExp: "",
      message: "",
    });
  };

  return (
    <>
      <section className="bg-[#FFFCF5] flex justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl bg-[#EDEAE0] mt-20 rounded-2xl shadow-md p-8 sm:p-10 md:p-12">
          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/logo.png"
              alt="YogKalariSamriddhi"
              className="h-10 mb-3"
            />
            <h1 className="text-2xl font-semibold text-[#065F46] tracking-wide">
              YOGKALARISAMRIDDHI
            </h1>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Send us a Message
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {/* Select Category */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-green-700"
              >
                <option value="">Select</option>
                <option value="Kalari Classes">Kalari Classes</option>
                <option value="Yoga">Yoga</option>
                <option value="Terrariums">Terrariums</option>
              </select>
              {error.category && (
                <p className="text-red-500 text-sm mt-1">{error.category}</p>
              )}
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-green-700"
              />
              {error.firstName && (
                <p className="text-red-500 text-sm mt-1">{error.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-green-700"
              />
              {error.lastName && (
                <p className="text-red-500 text-sm mt-1">{error.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-green-700"
              />
              {error.email && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
                maxLength={15}
                className="w-full px-4 py-2 border rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-green-700"
              />
              {error.phone && (
                <p className="text-red-500 text-sm mt-1">{error.phone}</p>
              )}
            </div>

            {/* Whatsapp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Whatsapp Number
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter your WhatsApp Number"
                maxLength={15}
                className="w-full px-4 py-2 border rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-green-700"
              />
              {error.whatsapp && (
                <p className="text-red-500 text-sm mt-1">{error.whatsapp}</p>
              )}
            </div>

            {/* Previous Martial Arts Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Previous Martial Arts Experience
              </label>
              <select
                name="martialArtsExp"
                value={formData.martialArtsExp}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-green-700"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {error.martialArtsExp && (
                <p className="text-red-500 text-sm mt-1">
                  {error.martialArtsExp}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell Us"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg outline-none text-gray-700 focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end mt-4">
              <button
                type="submit"
                className={`${
                  valid
                    ? "bg-green-800 hover:bg-green-900"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white px-6 py-2 rounded-full transition-all`}
                disabled={!valid}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <MarqueeBanner />
    </>
  );
};

export default ContactForm;
