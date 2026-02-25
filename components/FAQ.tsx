export default function FAQ() {
  const faqs = [
    { q: "What is the admission criteria for B.Tech CS?", a: "Admissions are based on high school merit and entrance exam scores." },
    { q: "Do you offer placement support?", a: "Yes, our dedicated placement cell handles campus drives, including specialized prep for cloud certifications like AWS." }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="accordion">
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}