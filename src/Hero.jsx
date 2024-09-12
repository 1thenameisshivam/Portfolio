import { Mail, FileText, Github, Linkedin, Twitter, Hash } from "lucide-react";
export default function Hero({ darkMode }) {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between">
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bold mb-4">Hey, I'm Aditya Raj 👋</h1>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-6`}>
          Welcome to my personal website – a digital space where I share my
          passions without social media algorithms. Explore and enjoy my digital
          living room.
        </p>

        <h2 className="text-2xl font-semibold mb-4">About me? 🤔</h2>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-6`}>
          I'm a 4th-year BTech Computer Science & Engineering Student at 🏛 JKLU,
          Jaipur, currently spending my final year as a Visiting Student at 🏛
          IIT Jammu, and also an associate-alumni of 🏛 IIT Gandhinagar, on a
          journey to becoming a Software Engineer. I have a keen interest in ✈
          aviation and tech. I always enjoy capturing photos and getting to know
          how our very complex world works.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { Icon: Mail, label: "Email" },
            { Icon: FileText, label: "Resume" },
            { Icon: Github, label: "GitHub" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Hash, label: "Hashnode" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
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
          className="rounded-lg h-[300px] w-[400px] mt-9 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
