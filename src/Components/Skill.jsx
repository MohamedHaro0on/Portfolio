import React from 'react'
import ClassNames from "./Components.module.css";

const Skill = (props) => {
    return (
        <span className={ClassNames.Skill}> {props.children}</span>
    )
}

export default Skill
