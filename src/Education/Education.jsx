import React from 'react'
import Title from "../Components/Title";
import Row from "../Components/Row";
import ClassNames from "./Education.module.css";

const LearnedObjects = [
    "During my stay at the college, I learnt tons of new things, related to both academics and co-curricular activities.",
    "The course framework was quite broad and touched upon most of the things required for an overall developement as a computer science engineer.",
    "Talking about the co-curricular activities, two of the most interesting things I learnt during my stay at the university are Football and travelling.",
]

const Left = () => {
    return (
        <>
            <h3 className={ClassNames.Faculty}> Computer Science and information technology </h3>
            <p>2018-2022</p>
        </>
    )
}
const Right = () => {
    return (
        <ul className={ClassNames.EductionList}>
            {LearnedObjects.map((object, index) => {
                return (
                    <li key={index}>{object}</li>
                )
            })}
        </ul>
    )
}
const Education = () => {
    return (
        <section className={ClassNames.Eductation}>
            <Title> Education </Title>
            <Row Right={<Right />} Left={<Left />} />
        </section>

    )
}

export default Education

