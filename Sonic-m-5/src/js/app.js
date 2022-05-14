// const cursor = document.getElementById("cursor");
// const anchors = document.querySelectorAll("a");
// const buttons = document.querySelectorAll("button");
// anchors.forEach(a => {
//     a.addEventListener("mouseover", function (e) {
//         cursor.style.display = "none";
//     })
//     a.addEventListener("mouseleave", function (e) {
//         cursor.style.display = "inline-block";
//     })
// });
// buttons.forEach(button => {
//     button.addEventListener("mouseover", function (e) {
//         cursor.style.display = "none";
//     })
//     button.addEventListener("mouseleave", function (e) {
//         cursor.style.display = "inline-block";
//     })
// });
// window.addEventListener("mousemove", function (e) {
//     cursor.style.left = e.pageX + "px";
//     cursor.style.top = e.pageY + "px";
// });


// ----------------------------------------------------
let lineIsActive = true;
let myTextarea = document.getElementById("myTextArea");
let codeMode = document.getElementById("codeMode");
let editor = CodeMirror.fromTextArea(myTextarea, {
    lineNumbers: lineIsActive
});

editor.setOption("theme", "base16-dark");

let lineNumbers = document.getElementById("lineNumbers");

lineNumbers.addEventListener("click", function (e) {
    e.preventDefault();
    lineIsActive = !lineIsActive;
    editor.setOption("lineNumbers", lineIsActive);
})

const themeColor = document.getElementById("themeColor");
const areaContainer = document.querySelector(".area-container");


function changeTheme(color) {
    areaContainer.style.background = color;
}


const exportImage = (e) => {
    html2canvas(document.getElementById("areaContainer")).then(canvas => {
        const a = document.createElement("a");
        a.setAttribute("download", "code.png");
        a.setAttribute("href", canvas.toDataURL("image/png"));
        a.click();
    });
}

const date = document.getElementById("date");
date.innerText = new Date().getFullYear();
editor.setOption("mode", "php");
codeMode.addEventListener("change",function(e){
    const selectedMode = e.target.value;
    editor.setOption("mode", selectedMode);
})

console.clear();