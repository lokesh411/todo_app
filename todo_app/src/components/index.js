import React, { useState, useEffect } from "react";
import Createtask from "./Createtask";
import Listtasks from "./List";
import * as requests from '../requests/task'

export default function TODOApp() {
    // task = {name: abc, state: "pending|completed", id: mongodbId}
    const [tasks, updateTask] = useState([])
    const getAllTasks = () => {
        requests.getAllTasks().then(response => {
            if (response.success) {
                updateTask(response.data)
            }
        }).catch((err) => {
            console.error('Error in fetching all the tasks :: ', err)
        })
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    const updateTasks = (taskId, payload) => {
        requests.updateTask(taskId, payload).then(response => {
            if (response.success) {
                // updateTask(response.data)
                getAllTasks()
            }
        }).catch((err) => {
            console.error('Error in updating the tasks :: ', err)
        })
    }
    const createTask = (name) => {
        console.log("the name of the task :: ", name)
        requests.createTask({ name, state: "pending" }).then(response => {
            if (!response.success) {
                console.error('Error in creating the task')
            }
            getAllTasks()
        }).catch(err => {
            console.error('Error in creating the task :: ', err)
        })
        // updateTask([...tasks, { name, state: "pending" }])
    }
    const moveTaskToCompletedState = (taskId) => {
        // const newTaskList = tasks.map((task, idx) => {
        //     if (idx === index) {
        //         task.state = "completed"
        //     }
        //     return task;
        // })
        // console.log("new task list :: ", newTaskList)
        // updateTask(newTaskList)
        updateTasks(taskId, { state: "completed" })
    }
    const deleteTask = (taskId) => {
        requests.deleteTask(taskId).then(response => {
            if (response.success) {
                // updateTask(response.data)
                getAllTasks()
            }
        }).catch((err) => {
            console.error('Error in updating the tasks :: ', err)
        })
        // const newTaskList = tasks.filter((task, idx) => {
        //     if (idx !== index) {
        //         return task
        //     }
        // })
        // updateTask(newTaskList)
    }
    return (
        <div>
            <Createtask createTask={createTask} />
            <Listtasks taskList={tasks} moveTaskToCompletedState={moveTaskToCompletedState} deleteTask={deleteTask} />
        </div>
    )
}