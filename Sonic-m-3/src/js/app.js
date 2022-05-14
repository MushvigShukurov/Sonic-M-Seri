var youtube = document.getElementById("h1");
youtube.addEventListener("click",function(e){
    e.preventDefault();
    window.open("https://www.youtube.com/channel/UCv1cilRYda9e8_07YWn4pIg","_blank");
})


var input = document.getElementById("todo");
var addBtn = document.getElementById("add");
var todos = document.getElementById("todos");
addBtn.addEventListener("click",function(e){
    e.preventDefault();
    var text = input.value;
    text = text.trim();
    if(text=="" || text == null){
        alert("Yaz birşeylər, Şənlənsin ürəklər!");
        return;
    }
    const li = document.createElement("li");
    const p = document.createElement("p");
    const i = document.createElement("i");
    i.classList = "far fa-trash-alt";
    p.innerText = text;
    li.appendChild(p);
    li.appendChild(i);
    todos.appendChild(li);
    input.value = "";
})

todos.addEventListener("mouseover",function(e){
    var deleteBtns = document.querySelectorAll(".fa-trash-alt")
    deleteBtns.forEach(btn=>{
       btn.addEventListener("click",function(e){
        var element = e.target.parentElement;
        element.remove();
       });
    });
})