function switchOn(val) {
    switch (val) {
        case 1:
            document.getElementsByTagName("p")[0].style = "animation: show 0.5s forwards ease-out;";
            document.getElementsByTagName("img")[1].src = "./assets/images/icon-minus.svg";
            break;
        case 2:
            document.getElementsByTagName("p")[1].style = "animation: show 0.5s forwards ease-out;"
            document.getElementsByTagName("img")[2].src = "./assets/images/icon-minus.svg"
            break;
        case 3:
            document.getElementsByTagName("p")[2].style = "animation: show 0.5s forwards ease-out;"
            document.getElementsByTagName("img")[3].src = "./assets/images/icon-minus.svg"
            break;
        case 4:
            document.getElementsByTagName("p")[3].style = "animation: show 0.5s forwards ease-out;"
            document.getElementsByTagName("img")[4].src = "./assets/images/icon-minus.svg"
            break;
    }
}
function switchOff(val) {
    switch (val) {
        case 1:
            document.getElementsByTagName("p")[0].style.setProperty("animation", "none");
            document.getElementsByTagName("img")[1].src = "./assets/images/icon-plus.svg";
    }
}