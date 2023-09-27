import React, { useContext } from "react";
import { testimonials } from "../../../db.jsx";
import { ThemeContext } from "./../../../context/ThemeContext";

const TCard = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            {testimonials.map((el, i) => {
                return (
                    <div
                        key={i}
                        className={`min-w-[380px] p-12 flex flex-col gap-y-6 hover:shadow-2xl shadow-lg h-[428px] rounded-xl  ${
                            theme === "dark" ? "bg-[#1F2937] opacity-70" : ""
                        }`}
                    >
                        <div className="flex items-center justify-center">
                            <div className="w-[64px] h-[64px] bg-[#9CA3AF] rounded-full">
                                <img
                                    src={el.img}
                                    className="rounded-full"
                                    alt=""
                                />
                            </div>
                        </div>
                        <p
                            className={`max-w-[280px]  ] ${
                                theme === "dark"
                                    ? "text-[#FFFFFF]"
                                    : "text-[#4B5563]"
                            }`}
                        >
                            {el.content}
                        </p>
                        <div
                            className={`flex items-center justify-center flex-col gap-y-1 ${
                                theme === "dark"
                                    ? "text-[#FFFFFF]"
                                    : "text-[#111827]"
                            }`}
                        >
                            <h2 className="text-[20px] leading-7 font-[Semibold]  dark:text-white">
                                {el.by}
                            </h2>
                            <p
                                className={`text-[14px]   ${
                                    theme === "dark"
                                        ? "text-[#FFFFFF]"
                                        : "text-[#4B5563]"
                                }`}
                            >
                                {el.workplace}
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default TCard;
