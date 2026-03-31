import {useQuery} from "@tanstack/react-query";
import {fetchPosts} from "../api/postsApi.js";

export default function PostList(){

    const DisplayPosts = () => {
        const {data: posts, error, isLoading} = useQuery("postsData", fetchPosts());

        if (isLoading) return <div>Fetching posts...</div>;
        if (error) return <div>An error occurred: {error.message}</div>;

        return(
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>

                ))}
            </ul>
        );
    };

}