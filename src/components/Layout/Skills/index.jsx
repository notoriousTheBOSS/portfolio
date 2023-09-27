import React, { useContext } from "react";
import { skills } from "../../../db.jsx";
import { ThemeContext } from "./../../../context/ThemeContext";
const index = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={`${theme === "dark" ? "bg-[#030712]" : ""}`}>
            <div className="container">
                <div className="py-[96px]">
                    <div>
                        <div className="flex items-center justify-center flex-col mb-[48px]">
                            <div className="py-[4px] px-[20px] rounded-[12px] bg-[#E5E7EB] dark:bg-[#E5E7EB] dark:text-white  text-[14px] font-[Medium]">
                                <h2
                                    className={`${
                                        theme === "dark" ? "text-[#4B5563]" : ""
                                    }`}
                                >
                                    Skills
                                </h2>
                            </div>
                            <p
                                className={`mt-[16px]  text-[20px] leading-7 ${
                                    theme === "dark"
                                        ? "text-white"
                                        : "text-[#4B5563]"
                                } `}
                            >
                                The skills, tools and technologies I am really
                                good at:
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-8 min-w-full gap-y-[48px]">
                        {skills.map((el, i) => {
                            return (
                                <div
                                    key={i}
                                    className="grid place-items-center hover:shadow-lg"
                                >
                                    <img
                                        className="w-[] h-[]"
                                        src={`${
                                            theme === "dark" && el?.img2
                                                ? el.img2
                                                : el.img
                                        }`}
                                        alt=""
                                    />
                                    <p
                                        className={`pt-[8px] ${
                                            theme === "dark"
                                                ? "text-white"
                                                : "text-[#4B5563]"
                                        } `}
                                    >
                                        {el.p}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
