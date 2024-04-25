import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navbar() {

  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
      <div className="flex">
        <Avatar>
          <AvatarImage src="/perfil.jpg" alt="perfil"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link href={'/'} className="font-bold text-3xl ml-4">        
          Dev <span className="text-orange-500">Bears</span> 
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#home'}>Home</Link>
        <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#projects'}>Projects</Link>
        <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#blog'}>Blog</Link>
        <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#contact'}>Contact</Link>
      </div>
      <div className="flex">
        <Menubar className="lg:hidden mr-4">
          <MenubarMenu>
            <MenubarTrigger>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#home'}>Home</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#projects'}>Projects</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#blog'}>Blog</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link className="px-2 hover:text-orange-500 transition ease-in-out duration-300" href={'/#contact'}>Contact</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <ModeToggle />
      </div>      
    </nav>
  );
}