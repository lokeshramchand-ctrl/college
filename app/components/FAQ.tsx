import React from 'react';
import '../styles/faq.css';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is the admission process for BTech programs?',
      answer: 'Admission to BTech programs is through JEE Main and JEE Advanced. Candidates need to clear JEE Main first, then appear for JEE Advanced for final admission.'
    },
    {
      question: 'What is the average package offered at IIT BHU?',
      answer: 'The average package offered in the latest placement season is ₹29 LPA with the highest package reaching ₹1.67 Crore per annum.'
    },
    {
      question: 'Does IIT BHU offer scholarships?',
      answer: 'Yes, IIT BHU provides merit-cum-means scholarships to 25% of undergraduate students based on eligibility criteria.'
    },
    {
      question: 'What is the campus size of IIT BHU?',
      answer: 'IIT BHU is located within a 1300-acre campus in Varanasi, featuring exemplary Indo-Gothic architecture and world-class facilities.'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section className="container" id="faq">
      <span className="section-subtitle">Frequently Asked Questions</span>
      <h2 className="section-title">Find answers to common questions about IIT BHU.</h2>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div className="faq-item" key={i}>
            <button
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              aria-expanded={activeIndex === i}
            >
              <span>{faq.question}</span>
              <span className="faq-toggle">{activeIndex === i ? '−' : '+'}</span>
            </button>
            {activeIndex === i && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
