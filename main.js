let stars1 = document.getElementById('stars1');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let Nouvil = document.getElementById('Nouvil');

window.onscroll = function () {
    let value = scrollY;

    // Parallax movement
    stars1.style.left = value + 'px';
    moon2.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';

    // Font size logic
    if (value < 67) {
        Nouvil.style.fontSize = value + 'px';
        Nouvil.style.display = 'block';
    } else if (value >= 67 && value < 478) {
        Nouvil.style.fontSize = '67px';
        Nouvil.style.display = 'block';
    } else if (value >= 478) {
        Nouvil.style.display = 'none';
    }
};
