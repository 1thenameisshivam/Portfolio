/* eslint-disable react/prop-types */
import { Moon, Sun } from "lucide-react";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="py-6 flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-500 transition-colors">
              home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition-colors">
              blog
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
      >
        <span className="sr-only">Toggle theme</span>
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
}
