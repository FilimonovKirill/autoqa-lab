import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const links = [
        { path: "/forms", label: "Forms" },
        { path: "/tables", label: "Tables" },
        { path: "/modals", label: "Modals" },
        { path: "/alerts", label: "Alerts" },
        { path: "/widgets", label: "Widgets" },
    ];

    return (
        <aside className="w-60 bg-gray-900 text-white p-4">
            <h1 className="text-xl font-bold mb-6">QA Playground</h1>
            <nav className="flex flex-col gap-2">
                {links.map(({ path, label }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700 font-semibold" : ""
                            }`
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
