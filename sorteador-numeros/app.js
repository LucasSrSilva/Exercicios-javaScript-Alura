function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if(quantidade > (ate - de + 1)){
        alert('Há mais números para ser sorteados do que possibilidades');
        reiniciar();
    }else{
        let i = 0;
        while(sorteados.length < quantidade && i < (ate - de + 1)){
            console.log(`${sorteados}`)
            numero = obterNumAleatorio(de, ate);

            if(!sorteados.includes(numero)){
                sorteados.push(numero);
            }else{
                alert('Há mais números para ser sorteados do que possibilidades');
                reiniciar();
            }
            i++;
            
    }}

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Numeros sorteados até agora: ${sorteados}</label>`;

    statusBotao();
}
function obterNumAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
function statusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('ate').innerHTML = 'Números sorteados: nenhum até agora';
    statusBotao();
}
