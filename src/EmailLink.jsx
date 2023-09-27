import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
function EmailLink() {
    const emailAddress = "khodievm@gmail.com";

    const emailSubject = "Hello";
    const emailBody = "I wanted to get in touch with you.";

    const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <a
            href={mailtoLink}
            className="flex items-center justify-center gap-[20px]"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Icon">
                    <path
                        id="Vector"
                        d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z"
                        stroke={theme === "light" ? "#4B5563" : "white"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        id="Vector_2"
                        d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335"
                        stroke={theme === "light" ? "#4B5563" : "white"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </g>
            </svg>

            <p
                className={`text-[36px] font-[Semibold] tracking-[-0.72px] leading-[40px] ${
                    theme === "dark" ? "text-[#fff]" : ""
                } `}
            >
                khodievm@gmail.com
            </p>
        </a>
    );
}

export default EmailLink;
