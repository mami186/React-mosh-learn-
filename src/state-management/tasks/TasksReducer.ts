import type { Dispatch } from "react";
import React from "react";

interface Task {
	id: number;
	title: string;
}
interface ADD {
	type: "ADD";
	task: Task;
}
interface DELETE {
	type: "DELETE";
	taskId: number;
}
type Actions = ADD | DELETE;

const TaskReducer = (tasks: Task[], action: Actions): Task[] => {
	switch (action.type) {
		case "ADD":
			return [action.task, ...tasks];
		case "DELETE":
			return tasks.filter((t) => t.id !== action.taskId);
		default:
			return tasks;
	}
};

export default TaskReducer;


interface TaskContextType {
	tasks: Task[];
	dispatch: Dispatch<Actions>;
}
export const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);