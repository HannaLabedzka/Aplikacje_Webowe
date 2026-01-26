export default function PostView() {
    return (

        <main>
            <section>
                <header id={"homepage_img_background"} >
                    <h1>All posts</h1>
                </header>

                <div id={"post_view_content"} >

                    <div id={"selected_post"} >
                        <img className={"selected_post_image"} src={"../src/styles/images/candy_4.jpg"}/>
                        <h2>Selected post's title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis facilisis cursus. Vestibulum sollicitudin metus ultrices, vestibulum velit eu, sodales dolor. Cras nulla sem, eleifend a efficitur vel, hendrerit at lacus. Maecenas ultricies justo mauris. Aenean sed orci tincidunt, sagittis enim commodo, cursus leo. </p>

                    </div>
                    <div id={"posts_list"}>
                        <div className={"posts_list_element"}>
                            <b>List element's title</b>
                            <img className={"post_image"} src={"../src/styles/images/candy_4.jpg"}/>

                        </div>
                        <div className={"posts_list_element"}>
                            <b>List element's title</b>
                            <img className={"post_image"} src={"../src/styles/images/candy_4.jpg"}/>

                        </div>
                        <div className={"posts_list_element"}>
                            <b>List element's title</b>
                            <img className={"post_image"} src={"../src/styles/images/candy_4.jpg"}/>

                        </div>
                        <div className={"posts_list_element"}>
                            <b>List element's title</b>
                            <img className={"post_image"} src={"../src/styles/images/candy_4.jpg"}/>

                        </div>


                    </div>




                </div>
            </section>
        </main>



    )
}