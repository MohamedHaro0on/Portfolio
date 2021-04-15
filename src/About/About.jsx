import React from 'react'
import ProfileImage from "../profileImage.jpg";
import ClassNames from "./About.module.css";
import Title from "../Components/Title";
import Skill from "../Components/Skill";
import Row from '../Components/Row';

const skills = [
    "C++", "Java", "Python", "Rest Apis", "Django", "mySQL", "git",
]
const Left = () => {
    return (
        <img
            src={ProfileImage}
            alt="Mohamed Ahmed Ali Haroon"
            title="Mohamed Ahmed Ali Haroon"
            aria-label = "Mohamed Ahmed Ali Haroon"
            width="300"
        />
    )
}
const Right = () => {
    return (
        <figcaption className={ClassNames.Description}>
            <p>
                Hi, my name is <strong>Mohamed Ahmed Ali Haroon</strong>. I am a student at faculty of Computer science and information technology .
             I am a passionate coder and have experience in Algorithms,
            Data Structures, backend developement, web developement, etc.  my passion has continuously driven me
            to expand my knowledge, experience, and relationships. With a strong background and diverse skill set, I’m confident in the creative ideas
            and successful solutions I bring to the table. Keep exploring my site to learn more information about me.
        </p>
            <p>
                I have worked with many languages,
            frameworks and technologies like  {skills.map((skill) => <React.Fragment key={skill}><Skill>{skill}</Skill> , </React.Fragment>)}etc.
        </p>
            <p>
                Currently I am looking forward to opportunities which allow me to apply my problem solving and
                logical thinking abilities to the real world scenarios and solve real world problems.
        </p>
        </figcaption>

    )
}
const About = () => {
    return (
        <section>
            <Title>About Me</Title>
            <article className={ClassNames.AboutMe}>
                <figure className={ClassNames.AboutMe}>
                    <Row Left={<Left />} Right={<Right />} />
                </figure>
            </article>
        </section>
    )
}

export default About