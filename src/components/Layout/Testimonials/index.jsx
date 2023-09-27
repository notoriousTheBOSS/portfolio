import React, { useContext } from "react";
import TCard from "./TCard";
import { ThemeContext } from "./../../../context/ThemeContext";

const index = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            className={`${theme === "light" ? "bg-[#F9FAFB]" : "bg-[#111827]"}`}
            id="testimonials"
        >
            <div className="container">
                <div className="py-[96px]">
                    <div>
                        <div className="flex items-center justify-center flex-col mb-[48px]">
                            <div className="py-[4px] px-[20px] rounded-[12px] bg-[#E5E7EB] dark:text-[#374151] text-[14px] font-[Medium]">
                                <h2>Testimonials</h2>
                            </div>
                            <p
                                className={`mt-[16px] text-[#4B5563] text-[20px] leading-7 e ${
                                    theme === "dark"
                                        ? "text-white"
                                        : "text-[#4B5563]"
                                }`}
                            >
                                Nice things people have said about me:
                            </p>
                        </div>
                        <div className="flex items-center justify-between gap-12">
                            <TCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
