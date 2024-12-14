import React from "react"
import styles from "./Todo.module.css"

const Todo = ({ todo }) => {
    return <li className={styles.item}>{todo}</li>
}

export default Todo
