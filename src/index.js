window.addEventListener('load', () => {
    animateDisplay(document.querySelector('section.main>article'), 'show', 'block', 600)
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

animateDisplay = function (target, animationClass, displayType, timeout) {
    var doneTimedDisplay = false,
        displaying = false;

    target.addEventListener('transitionend', function () {
        if (!target.classList.contains('show')) {
            target.style.display = 'none';
        }
        doneTimedDisplay = true;
    });
    if (!target.style.display || target.style.display === 'none') {
        displaying = true;
        target.style.display = displayType;
    } else {
        displaying = false;
    }

    setTimeout(function () {
        target.classList.toggle(animationClass);
        doneTimedDisplay = false;
    }, 10);

    if (!displaying) {
        setTimeout(function () {
            if (!doneTimedDisplay) {
                target.style.display = 'none';
            }
            doneTimedDisplay = true;
        }, timeout);
    }
};



const logo = document.getElementById('logo');
const logoS1 = document.getElementById('logo-s-1');
const logoS2 = document.getElementById('logo-s-2');
const logoS3 = document.getElementById('logo-s-3');
const logoS4 = document.getElementById('logo-s-4');
var initialX = 0;
var initialY = 0;
var amplitude = 100; // Ajusta la amplitud de la parábola
var frequency = 0.02; // Ajusta la frecuencia de la parábola
const logoHeight = 200;
const logoWidth = 230;
const logoWidth1y2 = 150;
const logoWidth3y4 = 110;

window.addEventListener('scroll', function () {
    const yMax = document.body.offsetHeight - window.innerHeight;
    const xMax = document.body.offsetWidth;

    const scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition); 770
    const propY = scrollPosition / yMax;
    const x = (propY - .5) * 2;
    // Posición
    const desp = (yMax - logoHeight) * (x + 1) * (x + .5) * (x) * (x - .5) * (x - 1);
    const desp1 = (yMax - logoHeight) * (x + 1) * (x + .51) * (x) * (x - .5) * (x - 1);
    const desp2 = (yMax - logoHeight) * (x + 1) * (x + .49) * (x) * (x - .5) * (x - 1);
    const desp3 = (yMax - logoHeight) * (x + 1) * (x + .52) * (x) * (x - .5) * (x - 1);
    const desp4 = (yMax - logoHeight) * (x + 1) * (x + .58) * (x) * (x - .5) * (x - 1);

    logo.style.top = (scrollPosition * 0.2) + "px";
    logoS1.style.top = (scrollPosition * 0.2) + "px";
    logoS2.style.top = (scrollPosition * 0.2) + "px";
    logoS3.style.top = (scrollPosition * 0.2) + "px";
    logoS4.style.top = (scrollPosition * 0.2) + "px";

    logo.style.left = (xMax / 2 - logoWidth / 2) + desp + "px";
    logoS1.style.left = (xMax / 2 - logoWidth1y2 / 2) + desp1 + "px";
    logoS2.style.left = (xMax / 2 - logoWidth1y2 / 2) + desp2 + "px";
    logoS3.style.left = (xMax / 2 - logoWidth3y4 / 2) + desp3 + "px";
    logoS4.style.left = (xMax / 2 - logoWidth3y4 / 2) + desp4 + "px";

    // // Tamaño
    logo.style.transform = (x < 0)
        ? 'scale(' + (1 - .35 * x - .35) + ')'
        : 'scale(' + (0.3 + .35 * x + .35) + ')';


    // Rotación
    logo.style.rotate = (scrollPosition / yMax * 180) + "deg"; // Con 1200 u.scroll gira 180
    logoS1.style.rotate = (scrollPosition / yMax * 180) + "deg";
    logoS2.style.rotate = (scrollPosition / yMax * 180) + "deg";
    logoS3.style.rotate = (scrollPosition / yMax * 180) + 60 + "deg";
    logoS4.style.rotate = (scrollPosition / yMax * 180) + 40 + "deg";

    if (scrollPosition >= yMax / 3.98 && scrollPosition <= yMax - yMax / 3.98) {
        logoS3.classList.remove('hidden')
        logoS4.classList.remove('hidden')
    } else {
        logoS3.classList.add('hidden')
        logoS4.classList.add('hidden')
    }
});

