document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const colortxt = document.getElementById("color");
    const wrap = document.getElementById("wrap");
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    btn.addEventListener('click', changeBack);

    function changeBack() {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += randHexValue();
        }
        wrap.style.backgroundColor = hexColor;
        colortxt.innerHTML = hexColor;
    }

    function randHexValue() {
        let randIndex = Math.floor(Math.random() * 16);
        return hex[randIndex];
    }
});
