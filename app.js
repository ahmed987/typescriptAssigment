const promise1 = "https://jsonplaceholder.typicode.com/posts";

////////////////////////////////////////////////////////////////////////
const getButton = document.getElementById("getPost");
const createButton = document.getElementById("createPost");
const putButton = document.getElementById("updatePost");
const patchButton = document.getElementById("patchPost");
const deleteButton = document.getElementById("deletePost");

const  getPosts = async () => { 
    const response  = await fetch(promise1);
    const posts     = await response.json();
    return posts;

}

getButton.addEventListener('click',async ()=>{
    const posts1= await getPosts();
console.log(posts1);
const table =   `<table class="table">
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Title</th>
        <th scope="col">body</th>
      </tr>
    </thead>
    <tbody>
    ${posts1.map(post=> 
        `<tr>
    <th scope="row">${post.id}</th>
    <td>${post.title}</td>
    <td>${post.body}</td>
  </tr>`
  ).join("\n")
}            
    </tbody>
  </table>`;
  document.querySelector("#table").innerHTML=table;
})