import React from "react"
import styles from "./UserInfo.module.css"

const UserInfo = ({ age, name }) => {
    return (
        <div className={styles.userInfo}>
            <p>Возраст - {age}</p>
            <p>Имя - {name}</p>
        </div>
    )
}

export default UserInfo
