const leBouton = document.querySelector('a');
const leCount = leBouton.querySelector('span');

let count = 0;

console.log(count);
leBouton.addEventListener('click', function() {
    count += 1;
    leCount.textContent = count;
    console.log('Button clicked');
});

leBouton.addEventListener('mouseover', function() {
    leBouton.style.color = 'white';
    leBouton.style.backgroundColor = '#FF0000';
    leCount.style.color = 'white';

});
