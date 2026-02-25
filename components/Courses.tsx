// components/Courses.tsx
const courses = [
  { id: 1, title: 'B.Tech Computer Science', desc: 'Master full-stack dev, React, and cloud deployment.' },
  { id: 2, title: 'B.Tech AI & Data Science', desc: 'Deep learning, neural networks, and Big Data.' },
  { id: 3, title: 'B.Des UI/UX', desc: 'Craft beautiful digital experiences and interactions.' },
];

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Programs Offered</h2>
        <div className="grid-cards">
          {courses.map((course) => (
            <article key={course.id} className="card">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <button className="btn btn-primary">Learn More</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}