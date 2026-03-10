import {useState} from "react";
import {useParams} from "react-router-dom";
import PostList from "../components/PostList";
import PostDetails from "../components/PostDetails";


export default function PostView(){

    const [selectedPostId, setSelectedPostId] = useState(1); //pierwszy, domyslny post
    const {id} = useParams();

    return(
        <main>
            <section>
                <header id={"homepage_img_background"} >
                    <h1>All posts</h1>
                </header>

                <div id="post_view_content">

                    <PostDetails postId={selectedPostId}/>
                    <PostList onSelectPost={setSelectedPostId}/>

                </div>
            </section>
        </main>



    )
}