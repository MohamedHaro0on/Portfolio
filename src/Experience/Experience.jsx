import React from 'react'
import Title from "../Components/Title";
import Row from "../Components/Row";
import ClassNames from "./Experience.module.css";

const Tasks = [
    "Built multi langual Front end application for many clients using the most modern tools",
    "Worked on building internal tools to improve the efficiency of the team ",
    "Developing features to enhance the user experience",
    "Optimizing web pages for maximum speed and scalability.",
    "Build reusable code and libraries for future use",
]
const Left = () => {
    return (
        <>
            <h4>
                <a href="https://www.newconcept-group.com/web/" target="_blank" rel="noopener noreferrer" aria-label ="New Concept Company"> @New Concept </a>
            </h4>
            <p> Software Engineer </p>
            <p>Oct 2019 : April 2020 </p>
        </>
    )
}
const Right = () => {
    return (
        <ul>
            {Tasks.map((task, index) => {
                return (
                    <li key={index}>
                        {task}
                    </li>
                )
            })}
        </ul>
    )
}
const Experience = () => {
    return (
        <section className={ClassNames.Education}>
            <Title> Experience </Title>
            <Row Left={<Left />} Right={<Right />} />
        </section>
    )
}

export default Experience