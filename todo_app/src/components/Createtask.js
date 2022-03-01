import React, { useState } from 'react'

export default function Createtask(props) {
    const [name, updateName] = useState("")
    const onChangeInput = (e) => {
        updateName(e.target.value)
    }
    return (
        <div>
            <input onChange={onChangeInput} value={name} style={{ margin: 10 }} />
            <button onClick={() => {
                props.createTask(name)
                updateName("")
            }} style={{ margin: 10 }}>+ Add task</button>
        </div>
    )
}