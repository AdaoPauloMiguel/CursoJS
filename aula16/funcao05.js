// RECURSIVIDADE

function fatorial(x) {
    if (x == 1){
        return 1
    } else {
        return x * fatorial(x-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)! 
1! = 1

*/