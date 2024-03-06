let nomeAmigo = [];

function adicionar(){
    let lista = document.getElementById('lista-amigos');
    nomeDigitado = document.getElementById('nome-amigo').value;
    if(nomeDigitado == ''){
        alert('Digite um nome');
        return;
    }
    if(nomeAmigo.includes(nomeDigitado)){
        alert('Digite nomes diferentes')
        return;
    }
    nomeAmigo.push(nomeDigitado);
    lista.innerHTML = nomeAmigo;
    
}

function embaralhar(lista){
    for(let i = lista.length; i; i--){
        const listaEmbaralhada = Math.floor(Math.random() * i);

        [lista[i - 1], lista[listaEmbaralhada]] = [lista[listaEmbaralhada], lista[i - 1]];
    }
}
function sortear(){
    let i = 0

    if(nomeAmigo.length > 2){
    embaralhar(nomeAmigo);
    let primeiroLista = nomeAmigo[0];
    while(i < nomeAmigo.length - 1){
        document.getElementById('lista-sorteio').innerHTML += (`${nomeAmigo[0]} ---> ${nomeAmigo[1]} <br>`);
        nomeAmigo.splice(0, 1);
    }
    document.getElementById('lista-sorteio').innerHTML += (`${nomeAmigo[0]} ---> ${primeiroLista}`);
    document.getElementById('lista-amigos').innerHTML = "";
    nomeAmigo = [];
    }else{
        alert('você não tem amigos o suficiente');
    }
}

function reiniciar(){
    document.getElementById('lista-sorteio').innerHTML = "";
    document.getElementById('lista-amigos').innerHTML = "";
}