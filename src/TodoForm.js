import React, { useState } from "react"

function TodoForm({addTask}) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const hanldeKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={hanldeKeyPress}
                placeholder="Введите значение..."
            />
            <button>Добавить</button>
        </form>
    )
}

export default TodoForm