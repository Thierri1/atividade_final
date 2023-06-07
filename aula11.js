


var prompt  = require('prompt-sync')();
let pedido=0
let quant=0
let total=0
let cod100 =0
let cod101 =0
let cod102=0
let cod103=0
let cod104=0
let cod105=0
let contador=0
let letra=0
let quant0=0
let quant1=0
let quant2=0
let quant3=0
let quant4=0
let quant5=0
let valor0=0
let valor1=0
let valor2=0
let valor3=0
let valor4=0
let valor5=0

console.log('Cardapio: ')
console.log('Cod 100:   Cachorro Quente    valor de:R$1,20 ')
console.log('Cod 101:   Bauru simples      valor de:R$1,30 ')
console.log('Cod 102:   Bauru com ovo      valor de:R$1,50 ')
console.log('Cod 103:   Hambúrguer         valor de:R$1,20 ')
console.log('Cod 104:   CheeseBurguer      valor de:R$1,30 ')
console.log('Cod 105:   Refrigerante       valor de:R$1,20 ')
do{ 

    pedido= Number (prompt('digite o numero do pedido: ')); 
quant= Number (prompt('digite a quantidade: '));
if(isNaN(quant)){
    console.log('digite novamente')
    letra+=quant
    }
    else if(pedido===100){
        cod100=1.20*quant
        total+=cod100
        quant0+=quant
        valor0+=cod100
    console.log('Valor do pedido: ','cod:',pedido,'quant:',quant,'valor:R$',cod100,'continue o pedido')
    }
     else if(pedido===101){
        cod101=1.30*quant
        total+=cod101
        quant1+=quant
        valor1+=cod101
    console.log('Valor do pedido: ','cod:',pedido,'quant:',quant,'valor:R$',cod101,'continue o pedido')
    }
     else if(pedido===102){
        cod102=1.50*quant
        total+=cod102
        quant2+=quant
        valor2+=cod102
    console.log('Valor do pedido: ','cod:',pedido,'quant:',quant,'valor:R$',cod102,'continue o pedido')
    }
     else if(pedido===103){
        cod103=1.20*quant
        total+=cod103
        quant3+=quant
        valor3+=cod103
    console.log('Valor do pedido: ','cod:',pedido,'quant:',quant,'valor:R$',cod103,'continue o pedido')
    }
     else if(pedido===104){
        cod104=1.30*quant
        total+=cod104
        quant4+=quant
        valor4+=cod104
    console.log('Valor do pedido: ','cod:',pedido,'quant:',quant,'valor:R$',cod104,'continue o pedido')
    }
     else if(pedido===105){
        cod105=1.00*quant
        total+=cod105
        quant5+=quant
        valor5+=cod105
    console.log('Valor do pedido até o momento: ','cod:',pedido,'quant:',quant,'valor:R$',cod105,'continue o pedido')
     }
    else if (pedido===999 || quant===999){
    console.log('Pedido finalizado')
    break
    }
    else
    console.log('código não identificado, Digite novamente')
contador++
}while(pedido!==999)
console.log('pedido Finalizado')
console.log('pedidos para cada código:  ')

 console.log('Valor do pedido: ','cod:100','quant:',quant0,'valor:R$',valor0,)
 console.log('Valor do pedido: ','cod:101','quant:',quant1,'valor:R$',valor1,)
 console.log('Valor do pedido: ','cod:102','quant:',quant2,'valor:R$',valor2,)
 console.log('Valor do pedido: ','cod:103','quant:',quant3,'valor:R$',valor3,)
 console.log('Valor do pedido: ','cod:104','quant:',quant4,'valor:R$',valor4,)
 console.log('Valor do pedido: ','cod:105','quant:',quant5,'valor:R$',valor5,)
 console.log('Valor total do pedido: ',total)
 console.log('quantidade de pedidos: ',contador)
