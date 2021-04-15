import React from 'react';
import ClassNames from "./Header.module.css";
import { ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { BsReplyAllFill } from "react-icons/bs";

const SocialLinks = [
    { title: "GitHub", icon: <AiFillGithub />, href: "https://github.com/MohamedHaro0on" },
    { title: "LinkedIn", icon: <ImLinkedin />, href: "https://github.com/MohamedHaro0on" },
    { title: "resume", icon: <BsReplyAllFill />, href: "https://github.com/MohamedHaro0on" },
]
const HomePage = () => {
    return (
        <header className={ClassNames.Header}>
            <div className={ClassNames.MainTitle}>
                <h1>Mohamed Ahmed Ali Haroon</h1>
                <h2> Software Engineer</h2>
            </div>
            <div className={ClassNames.ListContainer}>
                <ul className={ClassNames.SocialMediaIcons}>
                    {SocialLinks.map(({ title, icon, href }, index) => {
                        return (
                            <li key={index}>
                                <a
                                    href={href}
                                    title={title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`go to Mohamed's ${title} profile`}
                                >{icon}</a>
                            </li>
                        )
                    })}
                </ul>
                <address>
                    <p>
                        Email : <a href="mailto:mohamedharoon286@gmail.com" aria-label="send Message mohamedharoon286@gmail.com"> mohamedharoon286@gmail.com</a>
                    </p>
                    <p>
                        Phone : <a href="tel:0115950287" aria-label="Call Mohamed "> 0115950287 </a>
                    </p>
                </address>
            </div>
        </header>
    )
}
export default HomePage;