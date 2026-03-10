//dla oddzielenia logiki fetchowania

export async function fetchPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

export async function fetchPost(id){
    const res=await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return res.json();
}