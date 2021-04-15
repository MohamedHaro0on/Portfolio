import React from 'react'
import ClassNames from "./Components.module.css";

const Row = ({ Right, Left }) => {
    return (
        <div className={ClassNames.Row}>
            <div>{Left}</div>
            <div>{Right}</div>
        </div>
    )
}

export default Row
