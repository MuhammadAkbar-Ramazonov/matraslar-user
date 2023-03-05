const registerDialog = document.querySelector("#registerDialog");
const closeDialogBtn = document.querySelector("#closeDialogBtn");
const registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", () => {
    registerDialog.showModal();
})

closeDialogBtn.addEventListener("click", () => {
    registerDialog.close();
})