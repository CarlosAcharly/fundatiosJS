const main=document.querySelector('main');
const h1= document.querySelector('h1');

const eightBall=()=> {
    const question=prompt('Pregunta: ');
    const random =Math.floor(Math.random() * 8)
    const options = [
        'si compayeyo',
        'No mams we',
        'No por puta',
        'Chi',
        'khe?',
        'diez y media',
        'porque mijo?',
        'De que we?',
    ]
    h1.innerText=options[random];
}

main.addEventListener('click', eightBall);