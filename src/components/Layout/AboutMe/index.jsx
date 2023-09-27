import React, { useContext } from "react";
import MukhriddinTeacher from "../../../assets/images/MukhriddinTeacher.png";
import { ThemeContext } from "./../../../context/ThemeContext";

const index = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            className={`${theme === "light" ? "bg-[#F9FAFB]" : "bg-[#111827]"}`}
            id="about"
        >
            <div className="container">
                <div className="pt-[164px] pb-[96px] flex flex-col gap-12">
                    <div className="flex items-center justify-center">
                        <div
                            className={`py-[4px] px-[20px] rounded-[12px] bg-[#E5E7EB] text-[14px] font-[Medium]  ${
                                theme === "dark"
                                    ? "bg-[#E5E7EB] text-[#1F2937] "
                                    : "text-[#4B5563]"
                            }`}
                        >
                            <h2>About me</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-12">
                        <div className="min-w-[584px] flex items-start h-[694px] relative">
                            <img
                                src={MukhriddinTeacher}
                                className="w-[400px] h-[480px] ml-[40px] relative z-10 hover:translate-y-16 hover:scale-125"
                                alt=""
                            />
                            <div
                                className={`absolute w-[400px] h-[480px] top-[40px] left-[0px] border-[8px] border-[#F9FAFB]  border-solid ${
                                    theme === "dark"
                                        ? "bg-[#4B5563]"
                                        : "bg-[#E5E7EB]"
                                }`}
                            ></div>
                        </div>
                        <div
                            className={`flex flex-col gap-4 ${
                                theme === "dark"
                                    ? "text-white"
                                    : "text-[#4B5563]"
                            }`}
                        >
                            <h2
                                className={`mb-[8px] text-[#111827] text-[30px] font-[Semibold] leading-9 tracking-[-0.6px] ${
                                    theme === "dark"
                                        ? "text-white "
                                        : "text-[#111827]"
                                } `}
                            >
                                Curious about me? Here you have it:
                            </h2>
                            <p>
                                I'm a passionate, software engineer who
                                specializes in full stack development (Vue.js &
                                Node.js). I am very enthusiastic about bringing
                                the technical and visual aspects of digital
                                products to life. User experience, pixel perfect
                                design, and writing clear, readable, highly
                                performant code matters to me.
                            </p>
                            <p>
                                I began my journey as a web developer in 2015,
                                and since then, I've continued to grow and
                                evolve as a developer, taking on new challenges
                                and learning the latest technologies along the
                                way. Now, in my early thirties, 7 years after
                                starting my web development journey, I'm
                                building cutting-edge web applications using
                                modern technologies such as Next.js, TypeScript,
                                Nestjs, Tailwindcss, Supabase and much more.
                            </p>
                            <p>
                                I am very much a progressive thinker and enjoy
                                working on products end to end, from ideation
                                all the way to development.
                            </p>
                            <p>
                                When I'm not in full-on developer mode, you can
                                find me hovering around on twitter or on indie
                                hacker, witnessing the journey of early startups
                                or enjoying some free time. You can follow me on
                                Linked where I share tech-related bites and
                                build in public, or you can follow me on GitHub.
                            </p>
                            <p>Finally, some quick bits about me.</p>
                            <div className="grid grid-cols-2 gap-y-[10px]">
                                <p>
                                    <span className="ml-[5px] mr-[10px]">
                                        •
                                    </span>
                                    B.E. in Computer Engineering
                                </p>
                                <p>
                                    <span className="ml-[5px] mr-[10px]">
                                        •
                                    </span>
                                    Leadership
                                </p>
                                <p>
                                    <span className="ml-[5px] mr-[10px]">
                                        •
                                    </span>
                                    Full time coding
                                </p>
                                <p>
                                    <span className="ml-[5px] mr-[10px]">
                                        •
                                    </span>
                                    Project managment
                                </p>
                            </div>
                            <p>
                                One last thing, I'm available for freelance
                                work, so feel free to reach out and say hello! I
                                promise I don't bite 😉
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
