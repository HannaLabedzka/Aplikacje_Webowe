import {useQuery} from "@tanstack/react-query";
import {fetchPosts} from "../api/postsApi.js";
import {Link} from "react-router-dom";



export default function PostList({onSelectPost}){

    const {data:posts, isLoading} = useQuery({
        queryKey:["posts"],
        queryFn: fetchPosts

    });

    if(isLoading){
        return <div className="loading_overlay"
        >Loading...</div>;
    }

    return(
        <div id="postList">
            {posts.map(post => (
                <Link key={post.id} to={`/posts/${post.id}`} className="post-card">
                <div key={post.id} className="posts_list_element" onClick={() => onSelectPost(post.id)}>

                    <b>{post.title}</b>
                </div>
                </Link>
            ))}
        </div>


    )
}