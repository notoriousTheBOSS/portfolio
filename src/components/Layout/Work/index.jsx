import React, { useContext } from "react";

import WCard from "./WCard";
import { ThemeContext } from "./../../../context/ThemeContext";

const index = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div id="work" className={`${theme === "dark" ? "bg-[#030712]" : ""}`}>
            <div className="container">
                <div className="py-[96px]">
                    <div>
                        <div className="flex items-center justify-center flex-col mb-[48px]">
                            <div className="py-[4px] px-[20px] rounded-[12px] bg-[#E5E7EB] dark:text-[#1F2937] text-[14px] font-[Medium]">
                                <h2>Work</h2>
                            </div>
                            <p
                                className={`mt-[16px]  ${
                                    theme === "dark"
                                        ? " text-white"
                                        : "text-[#4B5563]"
                                } text-[20px] leading-7 dark:text-white`}
                            >
                                Some of the noteworthy projects I have built:
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-[48px] items-center">
                            <WCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
