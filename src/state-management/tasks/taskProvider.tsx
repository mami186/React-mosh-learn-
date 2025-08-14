import { useReducer } from "react";
import type { ReactNode } from "react";
import TaskReducer, { TaskContext } from "./TasksReducer";

interface Props {
	children: ReactNode;
}

const TaskProvider= ({ children }: Props)=> {
	const [tasks, dispatch] = useReducer(TaskReducer, []);

	return (
		<TaskContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
}
export default TaskProvider;