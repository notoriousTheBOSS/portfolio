import React, { useContext } from "react";
import ECard from "./ECard";
import { ThemeContext } from "./../../../context/ThemeContext";

const index = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            className={`py-[96px] ${
                theme === "light" ? "bg-[#F9FAFB]" : "bg-[#111827]"
            }`}
        >
            <div className="container">
                <div>
                    <div className="flex items-center justify-center flex-col mb-[48px]">
                        <div
                            className={`py-[4px] px-[20px] rounded-[12px] bg-[#E5E7EB] text-[14px] font-[Medium]  ${
                                theme === "dark"
                                    ? "bg-[#E5E7EB] text-[#1F2937] "
                                    : "text-[#4B5563]"
                            }`}
                        >
                            <h2>Experience</h2>
                        </div>
                        <p
                            className={`mt-[16px]  text-[20px] leading-7 ${
                                theme === "dark"
                                    ? " text-white"
                                    : "text-[#4B5563]"
                            }`}
                        >
                            Here is a quick summary of my most recent
                            experiences:
                        </p>
                    </div>
                    <div className="flex items-center flex-col gap-y-[48px]">
                        <ECard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
