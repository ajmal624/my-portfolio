import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setScrolled(scrollTop > 100);

      if (scrollTop <= 100) {
        setActive("");
      }
    };

    const navbarHighlighter = () => {
      const sections =
        document.querySelectorAll<HTMLElement>("section[id]");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");

        if (!sectionId) return;

        const sectionHeight = section.offsetHeight;
        const sectionTop =
          section.getBoundingClientRect().top -
          sectionHeight * 0.2;

        if (
          sectionTop < 0 &&
          sectionTop + sectionHeight > 0
        ) {
          currentSection = sectionId;
        }
      });

      if (currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", navbarHighlighter);

    handleScroll();
    navbarHighlighter();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "scroll",
        navbarHighlighter
      );
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActive(id);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo / Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={logo}
            alt="Mohammed Ajmal M"
            className="h-9 w-9 object-contain"
          />

          <p className="cursor-pointer text-[18px] font-bold text-white">
            {config.html.fullName}
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[18px] font-medium transition-colors duration-200 ${
                active === nav.id
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white`}
            >
              <a
                href={`#${nav.id}`}
                onClick={() => handleNavClick(nav.id)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="relative flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt={toggle ? "Close menu" : "Open menu"}
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          {/* Mobile Navigation Dropdown */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[180px] rounded-xl p-6 shadow-lg`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium transition-colors duration-200 ${
                    active === nav.id
                      ? "text-white"
                      : "text-secondary"
                  } hover:text-white`}
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={() =>
                      handleNavClick(nav.id)
                    }
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;