//Estrutura de repetição
                            //declarei o i=0
for (let i=0; i<10; i++){   //i++ vai acrecentar +1
    console.log(i)
}

//While

f =0;
while (f <10){
    console.log(f)
    f++;
}

// do while - enquanto

let w=0;

do{
    //console.log(w);
    w++;
}
while(w<5);

// função - um conjunto de dados para serem executados

function ola(nome){
    // ´´ (crase) string literal ou template
    console.log(`Seja bem cindo a, ${nome}`)
    alert(`seja bem vindo a, ${nome}`)
    document.write(`seja bem vindo a, ${nome}`)
}
//Executando a função ola passando valor
ola("TESTE")


