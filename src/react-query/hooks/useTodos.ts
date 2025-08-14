import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODO } from "../constats";
import type { Todo } from "../services/todoservice";
import todoservice from "../services/todoservice";


const useTodoList = () => {


	return useQuery<Todo[], Error>({
		queryKey: CACHE_KEY_TODO,
		queryFn: todoservice.getall,
		staleTime: 10 * 1000,
                
	});
};

export default useTodoList;
