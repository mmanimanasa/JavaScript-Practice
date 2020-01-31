const pressed = []
const secret = 'manasa';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secret.length-1, pressed.length-secret.length);
    if(pressed.join('').includes(secret)) {
        console.log('secret code is found');
        cornify_add();
    }
    console.log(pressed);
});