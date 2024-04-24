import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {

  return (
    <nav className="w-full relative flex items-center justify-between max-w-3xl mx-auto px-4 py-5">
      <div>
        <Link href={'/'} className="font-bold text-3xl">
          Bears <span className="text-orange-500">Dev</span> 
        </Link>
      </div>
      <div className="">
        <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#home'}>Home</Link>
        <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#projects'}>Projects</Link>
        <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#blog'}>Blog</Link>
        <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#contact'}>Contact</Link>
      </div>
      <div>
        <ModeToggle />
      </div>      
    </nav>
  );
}