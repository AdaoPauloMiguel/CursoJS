function parImpar(n) {
    if ( n % 2 == 0) {
        return `O número ${n} é par`
    } else {
        return `O número ${n} é impar`
    }
}

let res = parImpar(5)
console.log(res)

