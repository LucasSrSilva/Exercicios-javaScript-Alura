function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    let superior = parseInt(document.getElementById('qtd-superior').innerHTML);
    let pista = parseInt(document.getElementById('qtd-pista').innerHTML);
    let inferior = parseInt(document.getElementById('qtd-inferior').innerHTML);

    if(ingresso == 'pista' && quantidade <= pista){
        let Sub = pista - quantidade;
        document.getElementById('qtd-pista').innerHTML = `${Sub}`
    }else if(ingresso == 'inferior' && quantidade <= inferior){
        let Sub = inferior - quantidade;
        document.getElementById('qtd-inferior').innerHTML = `${Sub}`
    }else if(ingresso == 'superior' && quantidade <= superior){
        let Sub = superior - quantidade;
        document.getElementById('qtd-superior').innerHTML = `${Sub}`
    }else{
        alert('Quantidade indisponível :(');
        return;
    }
}