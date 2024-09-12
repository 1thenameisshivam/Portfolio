/* eslint-disable react/prop-types */
export default function Projects({ darkMode }) {
  const projects = [
    {
      name: "Sabrang 2024",
      description: "Official website of annual fest of JKLU.",
    },
    { name: "SolEth", description: "Web-wallet for Ethereum and Solana" },
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
              <a href="#" className="text-blue-400 hover:underline">
                GitHub
              </a>
              <a
                href="#"
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
