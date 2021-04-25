import React from 'react'
import Title from "../Components/Title";
import Data from "./data";
import ClassNames from "./Projects.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";


const Projects = () => {
    return (
        <section >
            <Title> Projects</Title>
            <div className={ClassNames.Projects}>
                {Data.map(({ name, repoUrl, liveUrl, img }, index) => {
                    return (
                        <article key={index} className={ClassNames.Project}>
                            <img src={img} title={name} alt={name} aria-label={`image of ${name} web application`} />
                            <footer className={ClassNames.Title}>
                                <p className={ClassNames.ProjectName}>
                                    <strong>{name}</strong>
                                    <span>
                                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`to ${name} live`}><BsBoxArrowUpRight /></a>
                                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`to ${name} repo`}><AiFillGithub /></a>
                                    </span>
                                </p>
                            </footer>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
export default Projects