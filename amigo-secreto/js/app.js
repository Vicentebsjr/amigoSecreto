
let amigos= [];
function adicionar() {
    let novoAmigo = document.getElementById('nome-amigo');
    if (novoAmigo.value == '') {
        alert('Informe o nome do amigo!');
        return;}
    if (amigos.includes(novoAmigo.value)) {
        alert ('Amigo já inserido!');
        return;
    }
        
    let listaDeAmigos = document.getElementById('lista-amigos');
    amigos.push(novoAmigo.value);
    if (listaDeAmigos.textContent == ''){
        listaDeAmigos.textContent = novoAmigo.value;
    } else {
        listaDeAmigos.textContent = novoAmigo.value + ',' + listaDeAmigos.textContent;
    }
    novoAmigo.value = '';

}
function sortear () {
    if (amigos.length < 4 && amigos.length % 2 !== 0) {
        alert ('insira mais amigos!'); 
        return;}
        if (amigos.length % 2 !== 0) {
            alert('O número de amigos deve ser par!');
            return;
    }
embaralha (amigos);
let listaSorteio = document.getElementById('lista-sorteio');
for (let i =0; i < amigos.length; i++) {
    if (i === amigos.length - 1) {
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
    }     
}
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}