"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
    contactMethod: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" && "checked" in target ? (target as HTMLInputElement).checked : value,
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.message) newErrors.message = "This field is required.";
    if (!formData.time) newErrors.time = "Preferred time is required.";
    if (!formData.agree) newErrors.agree = "Consent is required.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-[#f4f1e9] py-12 sm:py-18">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white border-2 border-green-800 rounded-xl px-6 sm:px-8 py-8 sm:py-10 shadow-sm text-green-800"
      >
        <h2 className="text-2xl font-semibold text-center mb-2 text-emerald-900">
          Get In Touch
        </h2>
        <p className="text-center text-sm mb-6 text-gray-700 leading-relaxed">
          Simply fill out the brief fields below and Dr. Serena will be in touch
          with you soon, usually within one business day. This form is safe,
          private, and completely free.
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2 bg-gray-100"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2 bg-gray-100"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="text"
            placeholder="(123) 456-7890"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-md p-2 bg-gray-100"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            What brings you here?
          </label>
          <textarea
            name="message"
            placeholder="How can i help you?"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-md p-2 bg-gray-100"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Time */}
        <div className="mb-1">
          <label className="block font-medium mb-1">
            Preferred time to reach you
          </label>
          <input
            type="text"
            placeholder="e.g.Morning, Afternoon, Evening, Weekends"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded-md p-2 bg-gray-100"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>

        <div className="mb-6 mt-5">
          <label className="block font-medium mb-1">
            Preferred Contact Method
          </label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full border rounded-md p-2 bg-gray-100 text-gray-700"
          >
            <option className="text-green-100" value="" disabled>
              Select preferred method
            </option>
            <option value="Mail">Mail</option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Call">Call</option>
            <option value="Messages">Messages</option>
          </select>
          {errors.contactMethod && (
            <p className="text-red-500 text-sm mt-1">{errors.contactMethod}</p>
          )}
        </div>

        {/* Recaptcha */}
        <ReCAPTCHA className="mb-6" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}/>


        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-emerald-800 text-white py-2 rounded-md hover:bg-emerald-900 transition"
        >
          Submit
        </button>

        {/* Footnote */}
        <p className="text-xs text-center mt-4 text-gray-600">
          © By clicking submit you consent to receive texts and emails from Dr.
          Serena Blake
        </p>
      </form>
    </div>
  );
}
