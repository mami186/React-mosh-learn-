
export interface Task {
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
export type Actions = ADD | DELETE;

const TaskReducer = (tasks: Task[], action: Actions): Task[] => {
	switch (action.type) {
		case "ADD":
			return [action.task, ...tasks];
		case "DELETE":
			return tasks.filter((t) => t.id !== action.taskId);
	}
};

export default TaskReducer;
