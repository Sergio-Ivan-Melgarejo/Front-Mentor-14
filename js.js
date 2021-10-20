const iconShade = document.querySelector(".icon-shade");

iconShade.addEventListener("click",()=>{
    let shade = document.querySelector(".shade");
    shade.classList.toggle("js");
    iconShade.classList.toggle("js-icon");
})
