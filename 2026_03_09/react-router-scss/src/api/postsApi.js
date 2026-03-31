//dla oddzielenia logiki fetchowania

export async function fetchPosts(){
    const res = await fetch("https://localhost:3000/posts");
    return res.json();
}

export async function fetchPost(id){
    const res=await fetch(`https://localhost:3000/posts/${id}`);
    return res.json();
}