const makeRequest = (url, requestInit = {}) => {
    return fetch(url, {
        ...requestInit,
        headers: new Headers({
            "Content-Type": "application/json"
        })
    }).then(response => response.json())
}

export const getAllTasks = () => {
    return makeRequest("/task/all")
}

export const createTask = (payload) => {
    return makeRequest("/task/create", { method: "POST", body: JSON.stringify(payload) })
}

export const updateTask = (taskId, payload) => {
    return makeRequest(`/task/${taskId}`, { method: "PUT", body: JSON.stringify(payload) })
}

export const deleteTask = (taskId) => {
    return makeRequest(`/task/${taskId}`, { method: "DELETE" })
}