import usePosts from "./hooks/usePosts";
import React from "react";

const PostList = () => {
	const pageSize = 10;

	const { data, error, isLoading, fetchNextPage ,isFetching } = usePosts({ pageSize });

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<ul className="list-group">
				{data?.pages.map((page: any, index) => (
					<React.Fragment key={index}>
						{page.map((post:any) => (
							<li key={post.id} className="list-group-item">
								{post.title}
							</li>
						))}
					</React.Fragment>
				))}
			</ul>
			<button disabled={isFetching} onClick={() => fetchNextPage()}>{isFetching ? 'loading':'next'}</button>
		</>
	);
};

export default PostList;
