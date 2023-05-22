window.addEventListener('load', () => {
    animateDisplay(document.querySelector('section.main>article'), 'show', 'block', 600)

    console.log(window.innerHeight);

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
var initialX = 0;
var initialY = 0;
var amplitude = 100; // Ajusta la amplitud de la parábola
var frequency = 0.02; // Ajusta la frecuencia de la parábola
const logoWidth = 230;

window.addEventListener('scroll', function () {
    const yMax = document.body.offsetHeight - window.innerHeight;
    const xMax = window.innerWidth;

    const scrollPosition = document.documentElement.scrollTop;
    const propY = scrollPosition / yMax;
    const x = (propY - .5) * 2;
    // Posición
    logo.style.top = (scrollPosition * 0.2) + "px";
    const desp = xMax * (x + 1) * (x + .6) * (x + .2) * (x - .2) * (x - .6) * (x - 1);
    console.log({ desp });
    logo.style.left = 683 + desp + "px";
    // calculatePositionLogo(yMax, scrollPosition, propY)

    // // Tamaño
    logo.style.transform = (x < 0)
        ? 'scale(' + (1 - .35 * x - .35) + ')'
        : 'scale(' + (0.3 + .35 * x + .35) + ')';


    // Rotación
    logo.style.rotate = (scrollPosition / yMax * 180) + "deg"; // Con 1200 u.scroll gira 180
});

