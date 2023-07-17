let num = [5, 8, 2, 9, 3]
num.push(7) /*adicionar valor*/
num.sort()/*colocar em ordem*/
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor ${num[0]}`)

let pos = num.indexOf(9)/* o O de of tem que ser maisculo*/
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor está na posição ${pos}`)
}
