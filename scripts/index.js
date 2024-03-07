const contactBtn = document.querySelector("#contact-btn");
const contactBtnCta = document.querySelector("#contact-btn-cta");
const contactBtnFooter = document.querySelector("#contact-btn-footer");
const contactBtnHero = document.querySelector(".hero-btn");

function showAlert() {
    alert("Link que leva para um WhatsApp");
};

contactBtn.addEventListener("click", () => {
    showAlert();
});

contactBtnCta.addEventListener("click", () => {
    showAlert();
});

contactBtnFooter.addEventListener("click", () => {
    showAlert();
});

contactBtnHero.addEventListener("click", () => {
    showAlert();
});