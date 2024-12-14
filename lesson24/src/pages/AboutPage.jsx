import React from "react"
import Description from "../components/Description"
import styles from "./AboutPage.module.css"

const AboutPage = () => {
    const descriptionData = {
        title: "Title 2",
        description: "description 2",
    }

    return (
        <div className={styles.page}>
            <h1>О нас</h1>
            <Description title={descriptionData.title} description={descriptionData.description} />
        </div>
    )
}

export default AboutPage
