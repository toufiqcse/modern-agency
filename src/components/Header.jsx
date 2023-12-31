/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



const Header = () => {
    // set nav responsive
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);
    // data load from api
    const [headers, setHeaders] = useState([]);
    const url = "navmenu.json";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setHeaders(data));
    }, []);







    return (
        <>
            <div className={`px-2 md:px-0`}>
                <div className="max-w-5xl mx-auto sm:px-4 lg:px-0 my-7">
                    <div className="flex  items-center justify-between  gap-2">
                        {/* logo section */}
                        <div
                            className="flex-shrink-0">
                            <a href={"/"} className="md:text-xl text-[16px] opacity-80 font-bold text-design  flex items-center text-secondary">
                                <img src="/logo.png" alt="" className="mr-2" />
                                <p>Fast Tech IT </p>
                            </a>
                        </div>
                        {/* link for desktop view */}
                        <div className="hidden md:block">
                            <div
                                className="ml-4 flex items-center md:ml-6">
                                {headers.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        className={`mr-9 transition duration-50 text-secondary text-[17px] font-normal 
                                       `}

                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                        </div>
                        <div className="hidden md:block">
                            <a href="#" className="px-7 py-3 rounded-3xl text-button border-2 font-medium cursor-pointer border-button">Get Started</a>
                        </div>

                        <div className=" flex md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md  text-secondary focus:outline-none  transition duration-150 ease-in-out"
                                aria-label="Main menu"
                                aria-expanded="false"
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes className="w-6 h-6"></FaTimes>
                                ) : (
                                    <FaBars className="w-6 h-6"></FaBars>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* mobile menu */}

                {isMobileMenuOpen && (
                    <div className="md:hidden  bg-slate-700  h-auto">
                        <div

                            className="px-[10%] pt-2 pb-3">
                            {headers.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    className={`flex flex-col items-start px-2 justify-start py-2  font-medium  transition-all duration-300 
                                       text-secondary text-[17px] "
                                        
                                        "
                                        }`}
                                    onClick={closeMobileMenu}
                                >
                                    {link.name}
                                </a>
                            ))}

                        </div>
                        <div className="md:hidden px-[10%] ">
                            <a href="#" className="px-7 py-3 rounded-3xl text-button border-2 font-medium cursor-pointer border-button">Get Started</a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;