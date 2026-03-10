


export default function Home() {


    return (
        <main>
            <section>
                <header id={"homepage_img_background"} >
                    <h1>Candy World</h1>
                </header>

                <div id={"homepage_our_posts"}>
                    <h3>Take a look at our posts...</h3>
                </div>

                <div id={"homepage_content"} >
                    <div className="homepage_content_element">
                        <img className={"post_image"} src={"../src/styles/images/candy_1.jpg"}/>
                        <p className={"post_title"}>Lorem</p>
                        <p className={"content_text"}>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    </div>
                    <div className="homepage_content_element">
                        <img className={"post_image"} src={"../src/styles/images/candy_2.jpg"}/>
                        <p className={"post_title"}>Lorem</p>
                        <p className={"content_text"}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    </div>
                    <div className="homepage_content_element">
                        <img className={"post_image"} src={"../src/styles/images/candy_3.jpg"}/>
                        <p className={"post_title"}>Lorem</p>
                        <p className={"content_text"}>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    </div>

                </div>
                <div id={"get_more_posts_addr"}>
                    <p>Discover more here...</p>
                </div>
                <div id={"about_section"}>
                    <h3>Get to know us!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis facilisis cursus. Vestibulum sollicitudin metus ultrices, vestibulum velit eu, sodales dolor. Cras nulla sem, eleifend a efficitur vel, hendrerit at lacus. Maecenas ultricies justo mauris. Aenean sed orci tincidunt, sagittis enim commodo, cursus leo. </p>
                    <img src={"../src/styles/images/heart.png"}/>
                </div>

            </section>

        </main>






       )

}