import React from 'react'
import Title from "../Components/Title";
import Data from "./data";
import ClassNames from "./Projects.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";


const Projects = () => {
    return (
        <section className={ClassNames.Projects}>
            <Title> Projects</Title>
            {Data.map(({ name, repoUrl, liveUrl, description, img }, index) => {
                return (
                    <article key={index} className={ClassNames.SingleProject} dir={index % 2 === 0 ? "rtl" : "ltr"}>
                        <div className={ClassNames.ImageContainer}>
                            <img src={img} title={name} alt={name} aria-label={`image of ${name} web application`} />
                            <div className={ClassNames.DesriptionContainer} dir={"ltr"}>
                                <h4>Personal Project</h4>
                                <p className={ClassNames.ProjectName}>
                                    <strong>{name}</strong>
                                    <span>
                                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`to ${name} live`}><BsBoxArrowUpRight /></a>
                                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`to ${name} repo`}><AiFillGithub /></a>
                                    </span>
                                </p>
                                <p>{description}</p>
                            </div>
                        </div>

                    </article>
                )
            })}
        </section>
    )
}
export default Projects