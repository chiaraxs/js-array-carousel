// 1. crea un array titoli;
// 2. crea un array paragrafi;
// 3. ogni volta che clicco sulla freccia right carico il titolo/paragrafo successivo;
// 4. arrivati all'ultimo titolo/paragrafo ricomincio da campo;

// creo array titoli e array paragrafi
const titleList = ['Parigi', 'Tokyo', 'Dublino', 'Vienna', 'Bruxelles'];
const paragraphList = [
    "Oltre a essere in assoluto la città più visitata al mondo (28 milioni di turisti all'anno, di cui 17 milioni stranieri), Parigi è da sempre considerata la città più romantica ed elegante, oltre che la capitale dell'arte e della moda.", 
    "Tokyo è una delle più grandi metropoli al mondo, sempre al passo con i tempi, caotica, ma perfettamente organizzata. Il fascino di entrare in contatto con una cultura molto lontana e completamente diversa dalla nostra, è una delle ragioni principali, per cui vale la pena visitare questa metropoli.", 
    "Nel centro storico di Dublino si trovano i monumenti che fanno capire la sua storia e la sua cultura. Uno dei più importanti è senza dubbio il Trinity College. Si tratta della più rinomata e famosa università di tutta l'Irlanda. In passato, molti dei maggiori intellettuali irlandesi hanno studiato qui.", 
    "Vienna è una città che ha sempre dato grande importanza all'arte e infatti può offrire numerosi musei, collezioni ed opere internazionali. Vanta ben 50 teatri, oltre 100 musei, innumerevoli gallerie e vari festival del teatro, della musica e della danza, noti in tutto il mondo.", 
    "Bruxelles offre alcuni dei più interessanti musei in Belgio, come i Musei Reali delle Belle Arti e il Magritte Museum. E se sei appassionato di fumetti, abbiamo ciò che fa per te. ... Il museo è ospitato in uno degli edifici del famoso architetto Victor Horta. Un vero capolavoro"
];

// controllo in console la stampa delle cont 
console.log(titleList);
console.log(paragraphList);

// creo variabile currentIndex e fisso index di partenza a 0 per poi poterlo cambiare ad ogni click
let currentIndex= 0;

// creo const x selettori e salvo in costante: button + title + paragrah
const outputButtonLeft = document. getElementById('button-left');
let outputChangeTitle = document.querySelector('.title');
let outputChangeParagraph = document.querySelector('.paragraph');
const outputButtonRight = document.getElementById('button-right');

// provo stampa a video
// outputChangeTitle.innerHTML = titleList[currentIndex];
// outputChangeParagraph.innerHTML = paragraphList[currentIndex];

// ad ogni click su freccia right -> change
// poi -> return to start

outputButtonRight.addEventListener('click', function (){
    currentIndex++;
    if (currentIndex > titleList.length -1){
        currentIndex = 0;
    }
    outputChangeTitle.innerHTML = titleList[currentIndex];
    outputChangeParagraph.innerHTML = paragraphList[currentIndex];
})

