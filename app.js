document.querySelector(".r-btn").addEventListener("click",function(event){
    const content = document.querySelector(".product-slide");
    content.scrollLeft+=1100;
    event.preventDefault();
})

document.querySelector(".l-btn").addEventListener("click",function(event){
    const content = document.querySelector(".product-slide");
    content.scrollLeft-=1100;
    event.preventDefault();
})

const sidebar = document.querySelector(".sidebar")
const cross = document.querySelector(".fa-xmark")
const black = document.querySelector(".black");
const sideBtn = document.querySelector(".second-1");
sideBtn.addEventListener("click",function(){
    sidebar.classList.add("active")
    cross.classList.add("active")
    black.classList.add("active")
});

cross.addEventListener("click",function(){
    sidebar.classList.remove("active")
    cross.classList.remove("active")
    black.classList.remove("active")
});