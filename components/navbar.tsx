import {
  House,
  Rss,
  FolderGit2,
  PersonStanding,
  AtSign,
  FileDown,
} from "lucide-react";
import Image from "next/image";
import HoverCard from "./hover-card";

export default function Navbar() {
  return (
    <header className="fixed bottom-0 left-0 w-full z-50 p-4">
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-full w-11/12 mx-auto max-w-4xl">
        <div className="flex-1 text-center md:text-left">
          <Image
            src={"/logo.jpeg"}
            width={35}
            height={35}
            alt="Logo"
            className="invert"
          />
        </div>
        <div className="flex-1">
          <ul className="flex justify-center space-x-6 md:space-x-8">
            <li className="cursor-pointer hover:text-gray-300 transition-colors relative group">
              <House className="inline mr-1" size={20} />
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-2 mt-2 z-10
                transition duration-200 ease-in-out
                opacity-0 group-hover:opacity-100
                pointer-events-none group-hover:pointer-events-auto"
              >
                <HoverCard title="Home" />
              </div>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors relative group">
              <PersonStanding className="inline mr-1" size={20} />
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-2 mt-2 z-10
                transition duration-200 ease-in-out
                opacity-0 group-hover:opacity-100
                pointer-events-none group-hover:pointer-events-auto"
              >
                <HoverCard title="About" />
              </div>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors relative group">
              <Rss className="inline mr-1" size={20} />
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-2 mt-2 z-10
                transition duration-200 ease-in-out
                opacity-0 group-hover:opacity-100
                pointer-events-none group-hover:pointer-events-auto"
              >
                <HoverCard title="Blogs" />
              </div>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors relative group">
              <FolderGit2 className="inline mr-1" size={20} />
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-2 mt-2 z-10
                transition duration-200 ease-in-out
                opacity-0 group-hover:opacity-100
                pointer-events-none group-hover:pointer-events-auto"
              >
                <HoverCard title="Projects" />
              </div>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors relative group">
              <AtSign className="inline mr-1" size={20} />
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-2 mt-2 z-10
                transition duration-200 ease-in-out
                opacity-0 group-hover:opacity-100
                pointer-events-none group-hover:pointer-events-auto"
              >
                <HoverCard title="Socials" />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-1 text-center md:text-right">
          <button className="cursor-pointer hover:text-gray-300 transition-colors relative group">
            <FileDown className="inline mr-1" size={20} />
            <div
              className="absolute -left-1/2 -translate-x-1/2 -top-2 mt-2 z-10
                transition duration-200 ease-in-out
                opacity-0 group-hover:opacity-100
                pointer-events-none group-hover:pointer-events-auto"
            >
              <HoverCard title="Resume" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
