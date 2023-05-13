/*Write text automaticaly*/
const txt = "Hello, I'm Lucas!"; // Output text
const delay = 100; // delay to type each word

const cont = document.getElementById("txt"); // Element on HTML

// Function to write
function type(txt, cont, i) {
    if (i < txt.length) {
        cont.innerHTML += txt.charAt(i);
        i++;
        setTimeout(() => type(txt, cont, i), delay);
    }
}

// Chama a função para iniciar o efeito de digitação
type(txt, cont, 0);



//Sequence of images

const images = [
    "img/dev.avif",
    "img/dev2.avif",
    "img/dev3.avif",
    "img/dev5.avif"
];

let indice = 0;
setInterval(() => {
    indice = (indice + 1) % images.length;
    document.getElementById("imagem-container").src = images[indice];
}, 3000);





//Returne after sending an email to the site. I tried to use an API to implement the real email send, but I didn't have time.

let data = [];

const form = document.getElementById('contact-form');
const name = form.elements.name;
const email = form.elements.email;
const message = form.elements.message;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendEmail(name.value, email.value, message.value);
    form.reset();
    
    
});

function sendEmail(name, email, message) {
    // código para enviar email aqui
    alert(`Email enviado para Lucas!`);

    data.push(name, email, message)
    

    localStorage.setItem("data", JSON.stringify(data));
}




//Change theme
function changeColor() {
    const body = document.body;
    const footer = document.getElementById("footer-container");
    const form = document.getElementById("contact-form");
    const nav = document.getElementById("header-nav");

    const corFundoAtual = body.style.backgroundColor;
    //const corTextoAtual = body.style.color;

    //const corFundoFooter = footer.style.backgroundColor;

    const image = [
        "img/backg.png",
        "img/profile.png"
    ];

    // Verifica a cor atual do fundo do body e troca para a cor desejada
    if (corFundoAtual === "white") {
        body.style.backgroundColor = "#202123";
        body.style.color = "white";
        footer.style.backgroundColor = "#202123";
        form.style.color = "white";
        nav.style.backgroundColor = "#202123";

        document.getElementById("profile").src = image[0];
        

    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        document.getElementById("profile").src = image[1];

        footer.style.backgroundColor = "#3a8ff5";
        form.style.color = "black";
        nav.style.backgroundColor = "white";
    }

}



