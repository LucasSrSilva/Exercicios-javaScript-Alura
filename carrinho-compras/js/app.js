let total = 0;
function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let carrinhoTotal = document.getElementById('valor-total')

    let nomeProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let preco = valor * quantidade;  
    total = preco + total; 

    if(quantidade == "" || quantidade == 0){
        alert('Adicione a quantidade desejada');
        return;
    }
 
    carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

    carrinhoTotal.innerHTML = `R$${total}`; 
}   
function limpar(){
    let total = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$0`;

}