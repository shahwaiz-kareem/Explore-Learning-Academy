"use client";

import { getQuestions } from "@/actions/faqs.action";
import { useState, useRef, useEffect } from "react";

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  useEffect(() => {
    const setData = async () => {
      const questions = await getQuestions();
      console.log(questions);
      setFaqs(questions);
    };
    setData();
  }, []);

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.length === 0 && (
            <div className="flex items-center justify-center">
              <p>Sorry! no question added yet...</p>
            </div>
          )}
          {faqs.length !== 0 &&
            faqs.map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                  }}
                  className="overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-6"
                >
                  <p className="py-4">{faq.answer}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
