//  Html selectors 
const searchPostUser = document.getElementById("searchPostUser");
const btnSearchPost = document.getElementById("btnSearchPost");

const searchPost = {
  Post:""
}

//Events
btnSearchPost.addEventListener("click",()=>{
  searchPost.Post = searchPostUser.value;
  searchPostUser.value = "";
  console.log(searchPost);
});