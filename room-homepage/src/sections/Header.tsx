import { useState } from "react";
import { X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="relative z-50">
      <nav className="absolute top-0 left-0 w-full p-8">
        <div className="flex items-center sm:space-x-16 md:space-x-8">
          <button className="lg:hidden z-50" onClick={toggleMenu}>
              <img src="/images/icon-hamburger.svg" alt="Menu" className="w-4" />
          </button>
          <img src="/images/logo.svg" alt="Logo" className="h-4" />
          <ul className="hidden lg:flex space-x-8 text-sm text-white">
            {["home", "shop", "about", "contact"].map((item) => (
              <li key={item}>
                <a onMouseOver={"b"} href={`/${item === "home" ? "" : item}`} className="hover:border-b-2 hover:border-white hover:w-[1px] transition-all duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50" />
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white p-8 z-50 flex justify-between  items-center">

              <X className="text-darkGray"  onClick={toggleMenu}/>
              <ul className="flex justify-center space-x-3 text-black">
                {["home", "shop", "about", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`/${item === "home" ? "" : item}`} className="hover:underline text-sm font-bold">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}