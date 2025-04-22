import logo from "../app/icon.png";
import Link from "next/link";
import NavLink from "./navLink/navLink";

export default function MainHeader() {
  return (
    <div className="ml-40 top-0 left-0 flex items-center space-x-4 relative ">
      <Link href="/" className="flex justify-center font-sans">
        <img
          src={logo.src}
          alt="Sample Image"
          className="rounded-lg  h-[100px] w-[100px] object-fill"
        />
        <h1 className="text-4xl my-6 p-4 uppercase text-amber-50 font-bold text-center tracking-wide font-sans">
          Next Level Food
        </h1>
      </Link>
      <nav className="flex items-center space-x-6 justify-between ml-auto mr-30 font-serif">
        <ul className="flex  space-x-6 text-md">
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
