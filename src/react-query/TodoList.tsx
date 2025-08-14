import useTodoList from "./hooks/useTodos";

const TodoList = () => {
	const { data: todo, error, isLoading } = useTodoList();

	if (isLoading) return <li className="list-group-item">Loading...</li>;
	if (error) return <p>{error.message}</p>;

	return (
		<ul className="list-group">
			{todo?.map((todo) => (
				<li key={todo.id} className="list-group-item">
					{todo.title}
				</li>
			))}
		</ul>
	);
};

export default TodoList;
