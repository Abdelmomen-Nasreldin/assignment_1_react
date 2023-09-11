import { useState } from "react";
import { Link } from "react-router-dom";
const pagesData = [
    {
        name: "home",
        path: "home",
    },
    {
        name: "about",
        path: "about",
    },
    {
        name: "portfolio",
        path: "portfolio",
    },
    {
        name: "contact",
        path: "contact",
    },
];
const Header = () => {
    let [toggleMenuProperty, setToggleMenuProperty] = useState(true);
    let [pages, setPages] = useState(pagesData);
    const toggleMenu = () => {
        setToggleMenuProperty(!toggleMenuProperty)
    };
    return (
        <header className="bg-[#2c3e50] relative">
            <div className="container mx-auto px-5 py-5 text-white flex justify-between items-center">
                <Link
                    to={pages[0].path}
                    className="logo cursor-pointer uppercase font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                >
                    start framework
                </Link>
                <nav className="bg-[#2c3e50] absolute top-full right-0 w-full md:static md:w-auto z-10">
                    <ul
                        className={` ${
                            toggleMenuProperty
                                ? "flex container mx-auto pb-2"
                                : "hidden md:flex"
                        } flex flex-col md:items-center md:flex-row md:gap-4`}
                    >
                        {pages.slice(1).map((page) => {
                            return (
                                <li key={page.name} className="px-5 py-3 font-bold capitalize">
                                    <Link to={page.path} className="p-2">
                                        {page.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <button className="block md:hidden py-3" onClick={toggleMenu}>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
