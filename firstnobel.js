let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let body = document.querySelector("body");
let content = document.querySelectorAll(".content");
// let footer = document.querySelectorAll("footer");
let lang = prompt("Enter the language in which you wants to read English or Hindi :");
if(lang.trim() === "English" || lang.trim() === "english" ){
    box3.remove();
}else if(lang.trim() === "Hindi" || lang.trim() === "hindi" ){
    // box1.remove();
    box1.replaceWith(box3);
}else{
    alert("Sorry! Found no version in that language");
    box1.remove();
    box3.remove();
}
document.querySelectorAll(".under a").forEach(link => {
    link.addEventListener("click", ()=>{
        link.style.color = "red";
        link.style.fontWeight = "700";
    });
});
// .under li:hover {
//     transform: translateX(5px);
//     transition: 0.2s;
// }
window.onload = ()=>{
    document.body.style.opacity = "1";
}



