/* eslint-disable react/prop-types */
export default function Projects({ darkMode }) {
  const projects = [
    {
      name: "Journey-Juggler",
      description: "Ai based travel itinerary planner",
      link: "https://journey-juggler.vercel.app/",
      github: "https://github.com/1thenameisshivam/Journey-Juggler",
    },
    {
      name: "Netflix-Gpt",
      description:
        "movie search and movie recomendation system added in netflix ui",
      link: "https://movixex.netlify.app/",
      github: "https://github.com/1thenameisshivam/Netflix_GPT",
    },
    {
      name: "Thoughts-app",
      description:
        "Thoughts app provides a platform to share your thoughts and ideas with the world anonymously.",
      link: "https://thought-s.netlify.app/",
      github: "https://github.com/1thenameisshivam/Thoughts",
    },
    {
      name: "Path.ai",
      description:
        "Path.ai is a platform where you create roadmap for any technology and share with the world.",
      link: "https://pathai.vercel.app/",
      github: "https://github.com/1thenameisshivam/Path.ai",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">What I Create</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-4`}
            >
              {project.description}
            </p>
            <div className="flex justify-between items-center">
              <a
                href={project.github}
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.link}
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Go to Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
