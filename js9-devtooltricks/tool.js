const dogs = [{ name: 'breezer', age: 2}, { name:'sneezer', age: 8}];
function makered() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

//normal console
console.log('normal');

//interpolated
console.log('hello i am %s string!','interpolated');
console.log(`hello i am backticked text`);

//styled
console.log('%c I am styled text', 'font-size:10px; background: blue');

//warn
console.warn('a warning');

//error
console.error('an error');

//info
console.info('crocodiles eat 3-4 people in year');

//testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

//clear
console.clear();

//view dom elements
console.dir(p);
console.clear();

//grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(` ${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog yrs old`);
    console.groupEnd(`${dog.name}`);
});

//count
console.count('man');
console.count('man');
console.count('manasa');
console.count('man');
console.count('man');
console.count('manasa');
console.count('man');
console.count('man');
console.count('manasa');

//timing
console.time('fecting data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fecting data');
    console.log(data);
});