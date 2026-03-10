import {useEffect, useState} from "react";
import candy from "../styles/images/candy_4.jpg";


export default function PostView() {

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setSelectedPost(data[0]);
            });

    }, []);


    return (
        <main>
            <section>
                <header id={"homepage_img_background"} >
                    <h1>All posts</h1>
                </header>

                <div id="post_view_content">

                        {selectedPost && (
                            <div id="selected_post">
                                <img src={candy} alt="" />
                                <h2>{selectedPost.title}</h2>
                                <b>Username {selectedPost.userId}</b>
                                <p>{selectedPost.body}</p>

                                <div id={"selected_post_comments"}>
                                    <h2>Look at others' opinions</h2>


                                </div>

                            </div>

                        )}





                    <div id={"posts_list"}>
                        <h2>Discover more...</h2>
                        {posts.map(post => (
                            <div key={post.id} className="posts_list_element" onClick={() => setSelectedPost(post)}>
                                <b>{post.title}</b>
                                <img src={candy} alt="" />
                            </div>

                        ))}
                    </div>


                </div>
            </section>
        </main>



    )
}