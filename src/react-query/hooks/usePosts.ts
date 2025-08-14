import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
 
interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}
interface PageQuery {
	pageSize: number;
}

const usePosts = (query: PageQuery) => {
	return useInfiniteQuery<Post[], Error>({
		queryKey: ["posts", query],
		queryFn: ({ pageParam = 1 }) =>
			axios
				.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
					params: {
						_start: ((pageParam as number) - 1) * query.pageSize,
						_limit: query.pageSize,
					},
				})
				.then((res) => res.data),
		initialPageParam: 1,
		staleTime: 1 * 60 * 1000,
		placeholderData: keepPreviousData,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.length > 0 ? allPages.length + 1 : undefined;
		},
	});
};

export default usePosts;
