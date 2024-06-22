let num = [5, 8, 2, 9, 3] 
num[5] = 0
num.push(4)
num.sort()
console.log(num)
console.log(`Nosso vector tem ${num.length} posições`)
console.log(`O segundo numero posicional do nosso array é ${num[1]}`)

let pos = num.indexOf(7)
console.log(`O valor 7 está na posição ${pos}`)
