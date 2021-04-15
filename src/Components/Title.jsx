import React from 'react'
import ClassaNames from "./Components.module.css";

const SectionTitle = (props) => {
    return (
        <h3 className = {ClassaNames.Title}>
           {props.children} 
        </h3>
    )
}

export default SectionTitle