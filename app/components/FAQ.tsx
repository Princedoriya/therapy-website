"use client";

import { useState } from "react";
import { ChevronRightCircle, ChevronDownCircle } from "lucide-react";
import { MotionDiv } from "./common/motion-wrapper";

export default function FAQSection() {
  const faqs = [
    {
      question:
        "Do you accept insurance? No, but a superbill is provided for self-submission?",
      answer:
        "Currently, insurance is not accepted directly, but we provide a superbill that you can submit to your insurance for reimbursement.",
    },
    {
      question:
        "Are online sessions available? Yes—all virtual sessions via Zoom?",
      answer:
        "Yes, all sessions are available virtually via Zoom to provide convenient access to therapy from your home.",
    },
    {
      question: "What is your cancellation policy? 24-hour notice required.",
      answer:
        "We require a 24-hour notice for cancellations to avoid being charged for the session.",
    },
    {
      question: "Do you offer in-person sessions?",
      answer:
        "Yes, in-person sessions are available at our office location following current health guidelines.",
    },
    {
      question: "What technology do we use for virtual sessions?",
      answer:
        "We use Zoom for virtual sessions, which is secure and easy to use on most devices.",
    },
    {
      question: "What are your hours?",
      answer:
        "Our office hours are Monday through Friday, 9 AM to 6 PM, with some evening availability.",
    },
    {
      question: "Do you take insurance?",
      answer:
        "We do not accept insurance directly but provide superbills for reimbursement.",
    },
    {
      question: "What is the cost of therapy?",
      answer: "Individual sessions are $200, and couples sessions are $245.",
    },
    {
      question: "What are the benefits of private pay therapy?",
      answer:
        "Private pay therapy offers more flexibility, privacy, and often shorter wait times.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex flex-col">
      {/* Rates and Insurance Section (top half) */}
      <div className="h-1/2 w-full bg-[#90afaf] flex items-center justify-center px-6 py-22">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center max-w-4xl text-[#0f0f0f]"
        >
          <h2 className="text-xl md:text-3xl font-serif font-normal mb-6">
            Session Fees And Office Hours
          </h2>
          <p className="mb-2">Individual Session Fees- $200</p>
          <p className="mb-4">couples Session Fees - $245</p>
          <p className="mb-4">In-person: Tue & Thu, 10 AM–6 PM</p>
          <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
        </MotionDiv>
      </div>

      {/* FAQ Section (bottom half or more if needed) */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex-1 bg-white text-[#3e4f43] px-6 py-18"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-3xl font-serif text-center font-semibold mb-10 text-[#3e4f43]">
            Frequently Asked Questions
          </h1>

          <h2 className="text-xl md:text-3xl font-serif font-semibold mb-5 text-[#3e4f43]">
            Therapy
          </h2>

          <div className="space-y-4 text-[#3e4f43] text-sm md:text-base">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#b8cbd1] pb-2">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center gap-2 w-full text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-xl text-[#b8cbd1]">
                    {openIndex === index ? (
                      <ChevronDownCircle className="w-5 h-5 text-[#3e4f43]" />
                    ) : (
                      <ChevronRightCircle className="w-5 h-5 text-[#b8cbd1]" />
                    )}
                  </span>
                  <span>{faq.question}</span>
                </button>
                {openIndex === index && (
                  <p
                    id={`faq-answer-${index}`}
                    className="mt-2 pl-7 text-[#3e4f43]"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
