const leBouton = document.querySelector('a');
const leCount = leBouton.querySelector('span');

let count = 146;

console.log(count);
leBouton.addEventListener('click', function() {
    if (!leBouton.classList.contains('hover')) {
        leBouton.classList.add('hover');
    }
    if () {
        leCount.classList.add('hover');
    }
    count += 1;
    leCount.textContent = count;
    console.log('Button clicked');

    setTimeout(() => {
    leBouton.classList.remove('hover');
    leCount.classList.remove('hover');
}, 2000);
});

