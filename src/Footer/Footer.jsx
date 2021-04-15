import React from 'react'
import ClassNames from "./Footer.module.css";
import Title from "../Components/Title";

const Footer = () => {
    return (
        <footer className={ClassNames.Footer}>
            <Title>Get In Touch</Title>
            <p>
                I'm currently looking for any new opportunities to put my skills to good use and develop them even further, my inbox is always open.
                Whether you're interested in recruiting me, have a question, or just want to say hi, I'll get back to you ASAP!
            </p>
            <a
                href="mailto:mohamedharoon286@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="send a message to mohamed haroon"
                className={ClassNames.Btn}> Say Hello</a>
            <address>
                <a
                    href="mailto:mohamedharoon286@gmail.com"
                    aria-label="send a message to mohamed haroon"
                >
                    mohamedharoon286@gmail.com
                    </a>
            </address>
        </footer>
    )
}
export default Footer