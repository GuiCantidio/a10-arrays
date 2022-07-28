
// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia; -->

let arrayNumber =[4,5,7,6]
let arrayString = ["Ronaldo", "Gaucho" ," Robinho"]
let arrayMistura = [9 ,"KAKA" , true ]

 let copiaArrayNumber = arrayNumber
 console.log(`\n ${arrayNumber} \n ${copiaArrayNumber}`)
 

 let copiaArrayString = arrayString
 copiaArrayString.splice(2 ,1)
 console.log(`\n ${arrayString} \n ${copiaArrayString}`) 
 

let copiaArrayMistura = arrayMistura
copiaArrayMistura.splice(1 ,1)
console.log(`\n ${arrayMistura} \n ${copiaArrayMistura}`)