const inicio = document.querySelector(".inInicio")
const pause = document.querySelector(".inPausar")
const reset = document.querySelector(".inResetar")
const cronometro = document.querySelector("h1")

// Lógica: iniciar 00:00:00 // horas, minutos, segundos 
// horas - se minutos completar 60, autoticamente horas se torna 1. 
// minutos - se segundos completar 60 segundos, autoticamente se torna 1 minuto. 
// segundos - faz countdown de 60 segundos, com intervalo 

let segundos = 0
let minutos = 0
let horas = 0
let contador;


function timer() {
    segundos++;

    if (segundos === 60) { // se segundos completar 60, o valor do minutos vai incrementar 
        minutos++; 
        segundos = 0; 
    } if (minutos === 60) { // se minutos completar 60, o valor do horas vai incrementar 
        horas++;
        segundos = 0;
        minutos = 0; 
    }

    cronometro.innerText = `${horas}:${minutos}:${segundos}` // contagem do segundos 
    
}

inicio.addEventListener("click", () => { // chamada de ouvinte para iniciar cronometro 
    contador = setInterval(timer, 1000)
})


pause.addEventListener("click", () => { // chamada de ouvinte para pausar cronometro
    clearInterval(contador)
})

reset.addEventListener("click", () => { // chamada de ouvinte para resetar cronometro
    horas = 0; 
    minutos = 0;
    segundos = 0;
})



