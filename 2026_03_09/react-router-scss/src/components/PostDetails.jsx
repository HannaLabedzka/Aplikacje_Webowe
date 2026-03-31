import {useQuery} from "@tanstack/react-query";
import {fetchPost} from "../api/postsApi.js";

export default function PostDetails({postId}){
    const {data:post, isLoading} = useQuery({
        queryKey:["posts", postId],
        queryFn: ()=> fetchPost(postId),
        enabled: !!postId

    });

    if(isLoading) return <p>Loading...</p>;
    if(!postId){
        return <p>Please, select a post to display</p>
    }
    //dodac for'a dla komentarzy
    return(
        <div id="selected_post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>

        </div>
    );

}