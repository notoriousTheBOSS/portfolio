import lightmode from "../../assets/icons/lightmode.svg";
import menu from "../../assets/icons/menu.svg";
import React, { useState, useContext } from "react";
import "./style.scss";
import { ThemeContext } from "./../../context/ThemeContext";

const index = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme);
    const setDark = () => {
        if (theme == "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };
    return (
        <header
            className={`${
                theme === "light" ? "bg-white" : "bg-[#030712]"
            } fixed top-0 w-full z-50 `}
        >
            <div className="container">
                <nav className="flex items-center justify-between h-[68px]">
                    <a href="" className="logo">
                        <h1
                            className={`font-bold text-[30px] ${
                                theme === "dark" ? "text-white" : ""
                            }`}
                        >{`<MH />`}</h1>
                    </a>
                    <button className="w-[36px] h-[36px] block  md:hidden">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Icon">
                                <path
                                    id="Vector"
                                    d="M4 12H20"
                                    stroke={
                                        theme === "light" ? "#4B5563" : "white"
                                    }
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    id="Vector_2"
                                    d="M4 6H20"
                                    stroke={
                                        theme === "light" ? "#4B5563" : "white"
                                    }
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    id="Vector_3"
                                    d="M4 18H20"
                                    stroke={
                                        theme === "light" ? "#4B5563" : "white"
                                    }
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                        </svg>
                    </button>
                    <div className="hidden  md:flex items-center justify-center">
                        <ul
                            className={`flex items-center justify-between gap-[24px] ${
                                theme === "dark"
                                    ? "text-white"
                                    : "text-[#4B5563]"
                            }  `}
                        >
                            <li className="hover:border-b-black dark:hover:border-b-white hover:border-solid hover:border-b">
                                <a href="#about">About</a>
                            </li>
                            <li className="hover:border-b-black dark:hover:border-b-white hover:border-solid hover:border-b">
                                <a href="#work">Work</a>
                            </li>
                            <li className="hover:border-b-black dark:hover:border-b-white hover:border-solid hover:border-b">
                                <a href="#testimonials">Testimonials</a>
                            </li>
                            <li className="hover:border-b-black dark:hover:border-b-white hover:border-solid hover:border-b">
                                <a href="#contact">Contact</a>
                            </li>
                            <div className="block w-[1px] h-[24px] bg-[#F3F4F6]  mr-6"></div>
                        </ul>
                        <div className="flex items-center justify-center gap-[16px]">
                            <button
                                onClick={setDark}
                                className="grid place-content-center w-[36px] h-[36px]"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 2V4"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 20V22"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M4.92993 4.92999L6.33993 6.33999"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M17.6599 17.66L19.0699 19.07"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M2 12H4"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M20 12H22"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6.33993 17.66L4.92993 19.07"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M19.0699 4.92999L17.6599 6.33999"
                                        stroke={
                                            theme === "light"
                                                ? "#4B5563"
                                                : "white"
                                        }
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="bg-[#111827] dark:bg-[#111827] rounded-[12px] text-white flex items-center justify-center px-[16px] py-[6px]">
                                <p>Download CV</p>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;
