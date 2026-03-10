import {useQuery} from "@tanstack/react-query";
import {fetchPosts} from "../api/postsApi.js";

export default function PostDetails({postId}){
    const {data:post, isLoading} = useQuery({
        queryKey:["posts", postId],
        queryFn: ()=> fetchPosts(postId),
        enabled: !!postId

    });




    if(!postId){
        return <p>Please, select a post to display</p>
    }
    if(isLoading) return <p>Loading...</p>;

    return(
        <div id="selected_post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );

}