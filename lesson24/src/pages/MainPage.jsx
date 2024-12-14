import React from "react"
import Description from "../components/Description"
import UserInfo from "../components/UserInfo"
import styles from "./MainPage.module.css"

const MainPage = () => {
    const descriptionData = {
        title: "Title",
        description: "description"
    }

    const numbers = [
        { id: 1, age: 25, name: "Иван" },
        { id: 2, age: 30, name: "Мария" },
        { id: 3, age: 22, name: "Алексей" }
    ]

    return (
        <div className={styles.page}>
            <h1>MainPage</h1>
            <Description title={descriptionData.title} description={descriptionData.description}/>

            {numbers.map((el) => (
                <UserInfo key={el.id} age={el.age} name={el.name}/>
            ))}
        </div>
    )
}

export default MainPage
