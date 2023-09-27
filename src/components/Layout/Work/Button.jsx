import React from "react";

const Button = ({ text }) => {
    return (
        <>
            <button className="px-[20px] py-[4px] rounded-full bg-[#E5E7EB] text-[14px] font-[Medium] text-[#4B5563] ">
                <a href="">{text}</a>
            </button>
        </>
    );
};

export default Button;
