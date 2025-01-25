import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold hover:text-yellow-300 transition-all duration-300">
          Pedro Oliveira's Portfolio
        </h1>
        <ul className="flex space-x-40">
          <li>
            <Link
              href={"/"}
              className="hover:text-yellow-300 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="hover:text-yellow-300 transition-all duration-300"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className="hover:text-yellow-300 transition-all duration-300"
            >
              Projects
            </Link>
          </li>
        </ul>
        <ContactButton label="Contact Me" href="/contact"></ContactButton>
      </div>
    </header>
  );
}
