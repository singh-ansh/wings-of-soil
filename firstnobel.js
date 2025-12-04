// let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3");
// let footer = document.querySelectorAll("footer");
// let lang = prompt("Enter the language in which you wants to read English or Hindi :");
// if(lang === "English" || lang === "english" ){
//     box3.style.visibility = 'hidden';
//     footer.style.marginTop = "1871px";
// }else if(lang === "Hindi" || lang === "hindi" ){
//     box1.style.visibility = 'hidden';
//     box2.style.marginTop = '10px';
// }else{
//     alert("Sorry! Has no version in that language");
//     box1.style.visibility = 'hidden';
//     box3.style.visibility = 'hidden';
// }
document.querySelectorAll(".under a").forEach(link => {
    link.addEventListener("click", ()=>{
        link.style.color = "red";
        link.style.fontWeight = "700";
    });
});
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300){
        topbtn.style.display = "block";
    } else {
        topbtn.style.display = "none";
    }
});
// .under li:hover {
//     transform: translateX(5px);
//     transition: 0.2s;
// }
window.onload = ()=>{
    document.body.style.opacity = "1";
}
