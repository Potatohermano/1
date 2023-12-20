/* Scroll + block slide out */
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

/* Hidden Gif Easter Egg */

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

/* Menu Popup*/

const openBtn1 = document.getElementById("menu_open");
const closeBtn1 = document.getElementById("menu_close");
const menu_pop = document.getElementById("menu_pop");

openBtn1.addEventListener("click", () => {
    menu_pop.classList.add("open");
});

closeBtn1.addEventListener("click", () => {
    menu_pop.classList.remove("open");
});

/* Menu Popup Option Effects */

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  let target = button.querySelector('.target');
  function handleMove(e) {
    const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
    const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

    target.style.setProperty('--x', `${ x }px`)
    target.style.setProperty('--y', `${ y }px`)
  }
  button.addEventListener('mousemove', (e) => {
    handleMove(e);
  });
  button.addEventListener('touchmove', (e) => {
    handleMove(e.changedTouches[0]);
  });
});