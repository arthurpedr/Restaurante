import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import "../Home/Css/Style.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Altera o estilo do cabeçalho com base na posição do scroll
      if (currentScroll > 0) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Remove o listener quando o componente for desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      ref={headerRef}
      id="main-header"
      className="fixed top-0 left-0 w-full text-[#F2F2F2] font-bold z-50 transition-all duration-300 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <p className="text-xl">Paris Six</p>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-xl">
          <ul className="flex items-center gap-8">
            <li>
              <a className="underline-hover" href="#AboutUs">
                About us
              </a>
            </li>
            <li>
              <a className="underline-hover" href="#Menu">
              Menu
              </a>
            </li>
            <li>
              <a className="underline-hover" href="#Reservation">
              Reservation
              </a>
            </li>
            <li>
              <a className="underline-hover" href="#Location">
              Location
              </a>
            </li>
            <li>
              <a className="underline-hover" href="#Contact">
              Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden flex flex-col p-4 text-lg font-semibold backdrop-blur-lg shadow-md">
          <ul className="flex flex-col items-center justify-center gap-4">
          <li>
              <a className="underline-hover" onClick={toggleMenu} href="#AboutUs">
                About us
              </a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Menu">
              Menu
              </a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Reservation">
              Reservation
              </a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Location">
              Location
              </a>
            </li>
            <li>
              <a className="underline-hover" onClick={toggleMenu} href="#Contact">
              Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;