import React, { useContext } from "react";
import { experience } from "../../../db";
import { ThemeContext } from "./../../../context/ThemeContext";

const ECard = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            {experience.map((el, i) => {
                return (
                    <div
                        key={i}
                        className={`max-w-[896px] w-full p-8 flex ${
                            theme === "dark" ? "bg-[#1F2937] opacity-70" : ""
                        }} items-start justify-center shadow-lg hover:shadow-2xl  rounded-2xl`}
                    >
                        <div>
                            <img
                                src={el.logo}
                                className="min-w-[125px] min-h-[25px]"
                                alt=""
                            />
                        </div>
                        <div
                            className={`flex flex-col gap-1 ml-[144px] mr-[48px] min-w-[384px] ${
                                theme === "dark"
                                    ? "text-white"
                                    : "text-[#4B5563]"
                            } `}
                        >
                            <h2
                                className={`mb-[12px] text-[20px] ${
                                    theme === "dark"
                                        ? "text-white"
                                        : "text-[#111827]"
                                }  font-[Semibold] dark:text-white`}
                            >
                                {el.position}
                            </h2>
                            {el.content1 && (
                                <div className=" flex items-start dark:text-white">
                                    <span className="block ml-[10px] mr-[10px]">
                                        •
                                    </span>
                                    <p className="max-w-[384px] ">
                                        {el.content1}
                                    </p>
                                </div>
                            )}
                            {el.content2 && (
                                <div className=" flex items-start">
                                    <span className="block ml-[10px] mr-[10px]">
                                        •
                                    </span>
                                    <p className="max-w-[384px]">
                                        {el.content2}
                                    </p>
                                </div>
                            )}
                            {el.content3 && (
                                <div className=" flex items-start">
                                    <span className="block ml-[10px] mr-[10px]">
                                        •
                                    </span>
                                    <p className="max-w-[384px]">
                                        {el.content3}
                                    </p>
                                </div>
                            )}
                            {el.content4 && (
                                <div className=" flex items-start">
                                    <span className="block ml-[10px] mr-[10px]">
                                        •
                                    </span>
                                    <p className="max-w-[384px]">
                                        {el.content4}
                                    </p>
                                </div>
                            )}
                        </div>
                        <p
                            className={`min-w-[151px]  dark:text-white ${
                                theme === "dark"
                                    ? "text-[#E5E7EB]"
                                    : "text-[#374151]"
                            }`}
                        >
                            {el.date}
                        </p>
                    </div>
                );
            })}
        </>
    );
};

export default ECard;
