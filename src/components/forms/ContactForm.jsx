"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validation/contact.validate";
import { sendContactDetails } from "@/actions/contact.action";
import { useContext } from "react";
import { RootContext } from "@/context/RootContext";

const ContactForm = () => {
  const context = useContext(RootContext);
  const { setNotify } = context;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    const res = await sendContactDetails(data);
    setNotify({ notify: true, success: res.success, message: res.message });

    reset();
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-5">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block mb-1 text-lg font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-400`}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-1 text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-400`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block mb-1 text-lg font-medium" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className={`w-full px-4 py-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-400`}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 mt-1 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium" htmlFor="message">
            Message or Question
          </label>
          <textarea
            id="message"
            rows="5"
            className={`w-full px-4 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-400`}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 mt-1 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-l px-2 from-blue-400 via-teal-400 to-green-300 w-full py-3 bg-green-500 text-white font-bold rounded-md shadow-md hover:bg-green-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
