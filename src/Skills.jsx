export default function Skills({ darkMode }) {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Git",
  ];

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-4 py-2 rounded-full ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
            } hover:scale-105 transition-transform`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
