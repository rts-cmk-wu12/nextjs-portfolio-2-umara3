
import Link from "next/link";
import { SlSocialTwitter } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";


export default function Header() {
  return (
    <header className="bg-black  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900 text-white py-4  w-[1110px] h-[70px] mx-auto rounded-b-lg ">
        <div className="flex items-center justify-between h-16">
            <nav className="space-x-4">
            <Link href="/" className="text-white-700 hover:text-green">Home</Link>
            <Link href="/about" className="text-white-700 hover:text-green">About</Link>
            <Link href="/contact" className="text-white-700 hover:text-green">Contact</Link>
          </nav>
          <div className="flex items-center gap-6">
            <FiLinkedin size={25} color="gray" />
           <SlSocialBehance size={25} color="gray"/>

           <SlSocialTwitter size={25} color="gray"/> 
          </div>
          
        </div>
      </div>
    </header>
  );
}