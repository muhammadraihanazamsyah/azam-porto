// Add JS here
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1566238323.
const container = document.querySelector(".container");


const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove("active");

const toggleIcons = document.querySelectorAll(".toggle-icon");
const icons = document.querySelectorAll(".toggle-icon i");
const darkContainer = document.querySelector(".toggle-icon");
const darkContainerImg = document.querySelector("#dark-container .home-img img");
darkContainerImg.src = "white.png";

toggleIcons.forEach(toggle => {
    toggle.addEventListener('click', () => {

        toggle.classList.add('disabled')
        setTimeout(() => {
            toggle.classList.remove('disabled')
        }, 1500)

        icons.forEach(icon => {
            icon.classList.toggle("bx-sun");
        })
        cloneContainer.classList.toggle("active");
        container.classList.toggle("active");
    })
})