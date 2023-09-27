import React, { useContext } from "react";
import { work } from "../../../db";
import Button from "./Button";
import { ThemeContext } from "./../../../context/ThemeContext";

const WCard = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <>
            {work.map((el, i) => {
                return (
                    <div
                        className={` flex max-w-[1152px] items-start justify-center rounded-2xl  shadow-lg hover:shadow-2xl ${
                            theme === "dark" ? "bg-[#1F2937]" : ""
                        } ${el.position && "flex-row-reverse"}`}
                        key={i}
                    >
                        <div
                            className={`p-[48px]   max-w-[576px] w-full rounded-2xl  ${
                                theme === "dark"
                                    ? "bg-[#1F2937]"
                                    : "bg-[#F9FAFB]"
                            }`}
                        >
                            <img src={el.img} alt="" />
                        </div>
                        <div
                            className={`p-[48px] flex flex-col gap-y-6 rounded-2xl ${
                                theme === "dark" ? "bg-[#1F2937]" : ""
                            }`}
                        >
                            <h2
                                className={`text-[20px] font-[Semibold]   ${
                                    theme === "dark"
                                        ? "text-white"
                                        : "text-[#111827]"
                                }`}
                            >
                                {el.title}
                            </h2>
                            <p
                                className={`max-w-[480px]  ${
                                    theme === "dark"
                                        ? "text-white"
                                        : "text-[#4B5563]"
                                }`}
                            >
                                {el.content}
                            </p>
                            <div className="flex items-start gap-2 max-w-[480px] flex-wrap">
                                {el.technologies.map((text) => {
                                    return <Button text={text} />;
                                })}
                            </div>
                            <button className="w-[36px] h-[36px] grid place-content-center">
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
                                            d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
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
                                            id="Vector_2"
                                            d="M15 3H21V9"
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
                                            id="Vector_3"
                                            d="M10 14L21 3"
                                            stroke={
                                                theme === "light"
                                                    ? "#4B5563"
                                                    : "white"
                                            }
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default WCard;
