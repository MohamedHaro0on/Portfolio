import React from 'react'
import Skill from '../Components/Skill';
import Title from "../Components/Title";
import ClassNames from "./Skills.module.css";

const skills = [
    "C++", "OOP", "Data Structures", "Allgorithms", "HTML", "CSS", "JavaScript", "Bootstrap", "ReactJs", "Axios", "MaterialUi",
]
const Skills = () => {
    return (
        <>
            <section>
                <Title> Skills</Title>
                <ul className={ClassNames.SkillsList}>
                    {skills.map((skill) => {
                        return (
                            <li key={skill}>
                                <Skill>{skill}</Skill>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section>
                <Title>Languages</Title>
                <ul className={ClassNames.LanguagesList}>
                    <li> Arabic : Native </li>
                    <li> English : intermediate </li>
                </ul>
            </section>

        </>
    )
}

export default Skills
