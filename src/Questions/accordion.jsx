import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./styles.css";

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleClick(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div className="faq-item" data-testid={`faq-item-${index}`} key={index}>
          <button
            className="faq-question"
            data-testid={`faq-question-${index}`}
            onClick={() => handleClick(index)}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">
              {openIndex === index ? (
                <FiChevronUp data-testid={`icon-up-${index}`} />
              ) : (
                <FiChevronDown data-testid={`icon-down-${index}`} />
              )}
            </span>
          </button>

          {openIndex === index && (
            <div data-testid={`faq-answer-${index}`}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
