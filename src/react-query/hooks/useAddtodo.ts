import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODO } from "../constats";
import type { Todo } from "../services/todoservice";
import todoservice from "../services/todoservice";


interface addTodoContent{
    previousTodo :Todo[] | undefined

}
const useAddtodo = () => {  
    const queryClient = useQueryClient();
	return useMutation<Todo, Error, Todo, addTodoContent>({
		mutationFn: (todo: Todo) =>todoservice.post(todo),

		onMutate: (savedTodo) => {
            const previousTodo =queryClient.getQueryData<Todo[]>(CACHE_KEY_TODO)
            const fakeId = Date.now();
            const optimisticTodo = { ...savedTodo, id: fakeId };

			queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO, (todos) => {
				return [optimisticTodo , ...(todos || [])];
			});
        
            return {previousTodo}
		},
		onSuccess: (savedTodo, newtodo) => {
			queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO, (todos) =>
				todos?.map((todo) => (todo === newtodo ? savedTodo : todo))
			);
		},
        onError:(error, newTodo ,context)=>{
            if(!error)return
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO ,context?.previousTodo) 
        }
	});
}

export default useAddtodo