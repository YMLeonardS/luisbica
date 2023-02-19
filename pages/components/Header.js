import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setOpen(false));

  function useOnClickOutside(menuRef, handler) {
    useEffect(() => {
      const listener = (e) => {
        if (!menuRef.current || menuRef.current.contains(e.target)) {
          return;
        }
        handler(e);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [menuRef, handler]);
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-14 shadow-md backdrop-blur-lg bg-white/30">
      <div className="container">
        <div
          className="relative flex items-center justify-between p-1.5 px-3"
          ref={menuRef}
        >
          <a href="#" className="flex gap-1">
            <Image
              src="/luisbica-logo2.png"
              alt="luisbica-logo"
              width={30}
              height={30}
              loading="lazy"
              blurDataURL="data:image/svg+xml;base64,[base64-encoded-placeholder]"
              className="max-w-xs mx-auto"
            />
            <Image
              src="/luisbica-text2.png"
              alt="luisbica-logo"
              width={110}
              height={110}
              className="max-w-xs mx-auto"
            />
          </a>
          <button
            id="hamburger"
            onClick={() => setOpen(!open)}
            className={`absolute top-0 p-3 right-2 lg:hidden ${
              open ? "hamburger-active" : ""
            }`}
          >
            <span
              className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${
                open ? "rotate-45" : ""
              }`}
            ></span>
            <span
              className={`hamburger-line transition duration-300 ease-in-out ${
                open ? "scale-0" : ""
              }`}
            ></span>
            <span
              className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${
                open ? "-rotate-45" : ""
              }`}
            ></span>
          </button>

          <nav
            className={`absolute top-full right-2 py-2 flex-col w-full max-w-[150px] rounded-md shadow-md bg-white lg:flex-row lg:static lg:p-0 lg:max-w-sm lg:shadow-none lg:rounded-none lg:bg-transparent  
          ${open ? "flex" : "hidden lg:flex"}`}
          >
            {[
              ["Home", "/#home"],
              ["About", "/#about"],
              ["Portfolio", "/#portfolio"],
              ["Contact", "/#contact"],
            ].map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="text-sm font-semibold px-6 p-2 rounded-md text-slate-700 hover:bg-primary/5 hover:text-primary transition duration-500 ease-in-out"
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
