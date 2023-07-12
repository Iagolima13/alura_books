
function aplicarDesconto(livros){
    const desconto = 0.3 ;
    livrosComDesconto = livros.map(livro => {
        //Copia todo arrya e faz o desconto
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })

    return livrosComDesconto;
};