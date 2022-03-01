import React from 'react'
import "./index.css"

/**
 * task = {name: abc, state: "pending|completed", id: unique}
 * @param {*} props 
 * @returns 
 */

export default function Listtasks(props = {}) {
    const { taskList } = props;
    return (
        <div style={{ width: 500 }}>
            <ul>
                {
                    taskList && taskList.map((task) => (
                        <li key={task._id} className="list-element">
                            <span className='list-element-name'>
                                {
                                    task.state !== "completed" ? task.name
                                        :
                                        (<strike>{task.name}</strike>)
                                }
                            </span>
                            <div className='list-element-buttons'>
                                {
                                    task.state !== "completed" && (
                                        <button onClick={(e) => props.moveTaskToCompletedState(task._id)} className="util-button">
                                            Done
                                        </button>
                                    )
                                }
                                <button onClick={() => props.deleteTask(task._id)} className="util-button">
                                    x Delete
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}