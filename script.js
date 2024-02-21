let show = "animation: show 0.5s forwards ease-out;";
let hide = "animation: hide 0.5s forwards ease-out;";
let plusIcon = "./assets/images/icon-plus.svg";
let minusIcon = "./assets/images/icon-minus.svg";

let toggles = document.querySelectorAll(".toggle");
let content = document.getElementsByTagName("p");
let icons = document.querySelectorAll('[alt="plus"]');
toggles.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
        if (content[index].style = show && icons[index].src.match(minusIcon)) {
            content[index].style = hide;
            icons[index].src = plusIcon;
        }
        else {
            icons[index].src = minusIcon;
            content[index].style = show;
        }
    })
})