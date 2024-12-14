import React from "react"
import styles from "./Description.module.css"

const Description = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Description;
