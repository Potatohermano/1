const boxes = document.querySelectorAll('.box');

window,addEventListener('scroll',checkBoxes);

checkBoxes;

function checkBoxes(){
    const triggerbottom = window.innerHeight /5 * 4;

    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerbottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const pop = document.getElementById("pop");

openBtn.addEventListener("click", () => {
    pop.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    pop.classList.remove("open");
});

/* Year Menu */

var optionscontainer = document.getElementById("optionscontainer");

function toggleOptions() {
    if (optionscontainer.classList.contains("show")) {
        optionscontainer.style.animation = "slideOut 0.3s ease-in-out forwards";
        setTimeout(() => {
            optionscontainer.classList.remove("show");
            optionscontainer.style.animation = "";
        }, 300);
    } else {
        optionscontainer.style.animation = "";
        optionscontainer.classList.add("show");
    }
}

function handleOptionClick(option) {
    console.log("Clicked on:", option);
    optionsContainer.classList.remove("show");
}

