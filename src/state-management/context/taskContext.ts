import type { Dispatch } from "react"
import type { Actions, Task } from "../reducers/TasksReducer"
import React from "react"

interface TaskContextType   {
    tasks:Task[]
    dispatch:Dispatch<Actions>
}

const TaskContext =React.createContext<TaskContextType>({} as TaskContextType)

export default TaskContext