/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Mail, FileText, Github, Linkedin, Twitter, Hash } from "lucide-react";

export default function Hero({ darkMode }) {
  return (
    <section className="flex flex-col gap-5 md:flex-row items-center md:items-start justify-between">
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bold mb-4">Hey, I'm SHIVAM KUMAR 👋</h1>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-6`}>
          Welcome to my personal website – a digital space where I share my
          passions without social media algorithms. Explore and enjoy my digital
          living room.
        </p>

        <h2 className="text-2xl font-semibold mb-4">About me? 🤔</h2>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-6`}>
          I'm Shivam Kumar, a 4th-year Computer Science & Engineering student at
          🏛 GLA University, Mathura, originally from 🌆 Varanasi. As a
          passionate full-stack developer, I'm deeply interested in 🤖 AI and
          always eager to explore the latest technologies. When I'm not coding,
          you'll often find me ✈️ traveling to new places and soaking in new
          experiences. I love discovering how diverse and interconnected our
          world truly is.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {[
            {
              Icon: Mail,
              label: "Email",
              href: "mailto:1thenameisshivam@gmail.com",
            },
            { Icon: FileText, label: "Resume", href: "../public/resume.pdf" }, // Add resume link here
            {
              Icon: Github,
              label: "GitHub",
              href: "https://github.com/1thenameisshivam",
            },
            {
              Icon: Linkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/shivamkumar8987/",
            },
            { Icon: Twitter, label: "Twitter", href: "#" }, // Add Twitter link here
            {
              Icon: Hash,
              label: "Hashnode",
              href: "https://1thenameisshivam.hashnode.dev/",
            },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              } transition-colors`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="md:w-1/3">
        <img
          src="../public/img.png"
          alt="Shivam Kumar"
          className="rounded-lg h-[300px] w-[400px] mt-16 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
