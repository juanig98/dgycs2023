window.addEventListener('load', () => {
    animateDisplay(document.querySelector('section.main>article'), 'show', 'block', 600)
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
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
