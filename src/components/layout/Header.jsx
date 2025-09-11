import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/forms", label: "Forms" },
    { path: "/tables", label: "Tables" },
    { path: "/modals", label: "Modals" },
    { path: "/alerts", label: "Alerts" },
    { path: "/widgets", label: "Widgets" },
  ];

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="h-14 flex items-center justify-between px-6">
        <h2 className="text-lg font-semibold">AutoQA Lab</h2>

        <nav className="hidden lg:flex gap-6">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-white border-t flex flex-col shadow-md">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-6 py-3 hover:bg-gray-100 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
