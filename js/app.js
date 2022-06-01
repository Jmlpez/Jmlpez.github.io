const btns = document.querySelectorAll(".btn-item"),
    gallery = document.querySelector(".gallery"),
    projects = document.querySelectorAll(".project");

let idx = 0;

document.addEventListener("DOMContentLoaded", () => {
    gallery.style.height = projects[idx].clientHeight + "px";
});

const showProject = (i) => {
    if (idx == i) return;
    projects[idx].classList.add("hide");
    btns[idx].classList.remove("btn-item__active");
    idx = i;
    projects[idx].classList.remove("hide");
    btns[idx].classList.add("btn-item__active");

    gallery.style.height = projects[idx].clientHeight + "px";
};

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let i = 0;
        for (; i < btns.length && btns[i] !== btn; i++);
        showProject(i);
    });
});
