let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let body = document.querySelector("body");
let content = document.querySelectorAll(".content");
// Check if prompt was already answered in this tab
let savedLang = sessionStorage.getItem("lang");

function applyLanguage(lang) {

    if (lang.trim() === "English" || lang.trim() === "english") {
        box3.remove();     // English → right box remove
    }

    else if (lang.trim() === "Hindi" || lang.trim() === "hindi") {
        box1.replaceWith(box3);   // Hindi → box3 replaces box1 (left side)
    }

    else {
        alert("Sorry! Found no version in that language");
        box1.remove();
        box3.remove();
    }
}

if (savedLang) {

    // No prompt — apply saved language automatically
    applyLanguage(savedLang);

} else {

    // First time → show prompt
    let lang = prompt("Enter the language (English or Hindi):");

    sessionStorage.setItem("lang", lang);  // Save till tab closes
    applyLanguage(lang);
}

// Rest of your code
document.querySelectorAll(".under a").forEach(link => {
    link.addEventListener("click", ()=> {
        link.style.color = "red";
        link.style.fontWeight = "700";
    });
});

window.onload = ()=> {
    document.body.style.opacity = "1";
};

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




