const modalBack = document.querySelector("#modal-back");
const modalImg = document.querySelector("#modal-img");
const closeModal = document.querySelector("#close-modal");

const arrImg = document.querySelectorAll(".gallery-item > img");
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");


let currentIdx = 0;

const setPicture = ()=>{
    modalImg.src = arrImg[currentIdx].src;
}

closeModal.addEventListener("click",()=>{
    modalBack.classList.remove("show-modal");
})

arrImg.forEach((img, idx)=>{
    img.addEventListener("click", ()=>{
        modalBack.classList.add("show-modal");
        currentIdx = idx;
        setPicture();
    })
});

const moveLeft = ()=>{
    currentIdx--;
    if(currentIdx < 0)currentIdx = arrImg.length-1;
    setPicture();
}

const moveRight = ()=>{
    currentIdx++;
    if(currentIdx == arrImg.length)currentIdx = 0;
    setPicture();
}

leftBtn.addEventListener("click", ()=>{
    moveLeft();
});

rightBtn.addEventListener("click", ()=>{
    moveRight();
});
