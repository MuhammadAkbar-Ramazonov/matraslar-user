const primaryMenu = document.querySelector("#primaryMenu");
const toggleMenuBtn = document.querySelector("#openMenuBtn");
const closeMenuBtn = document.querySelector("#closeMenuBtn");

toggleMenuBtn.addEventListener("click", () => {
    toggleMenuBtn.classList.add("close");
    closeMenuBtn.classList.add("show");
    primaryMenu.classList.add("show");
});

closeMenuBtn.addEventListener("click",()=>{
    toggleMenuBtn.classList.remove("close");
    closeMenuBtn.classList.remove("show");
    primaryMenu.classList.remove("show");
});