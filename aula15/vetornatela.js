let valores = [9, 1, 7, 2, 3, 6, 5, 8, 7]
valores.sort()
console.log(valores)

// for (let index = 0; index < valores.length; index++) {

//     console.log(`A posição ${index} tem o valor ${valores[index]}`)
// }


// Usando uma maneira simplificada. 

for (let index in valores) {
    console.log(`A posição ${index} tem o valor ${valores[index]}`)
}
