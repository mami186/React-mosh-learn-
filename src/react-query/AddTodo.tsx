import { useRef } from "react";
import useAddtodo from "./hooks/useAddtodo";



const TodoForm = () => {
	
	const ref = useRef<HTMLInputElement>(null);
	const addTodo = useAddtodo();
	return (
		<>
			{addTodo.error?.message && (
				<div className="alert alert-danger">{addTodo.error.message}</div>
			)}
			<form
				onSubmit={(event) => {
					event.preventDefault();

					if (ref.current && ref.current.value)
						addTodo.mutate({
							id: 1,
							title: ref.current?.value,
							userId: 1,
							completed: false,
						});
				}}
				className="mb-3"
			>
				<input className="form-control" ref={ref} type="text" />
				<button type="submit" className="btn btn-primary">
					{addTodo.isPending ? "ADDING..." : "ADD"}
				</button>
			</form>
		</>
	);
};

export default TodoForm;
