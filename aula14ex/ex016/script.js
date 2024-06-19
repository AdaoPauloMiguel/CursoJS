function conta() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ){
        window.alert (`[ERRO] Faltam dados!`)
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = 'Contando: <br>' 
        let ni = Number(ini.value)
        let nf = Number(fim.value)
        let np = Number(pas.value)
        if (np <= 0) {
            window.alert('Passo inválido! considerando PASSO 1')
            np = 1
           }

        if (ni < nf) {
            for (let c = ni; c <= nf; c+= np) {
                res.innerHTML += `${c} \u{1F449}`   
            }
        } else {
            for (let c = ni; c >= nf; c-= np) {
                res.innerHTML += `${c} \u{1F449}`   
            }
        }

        
        res.innerHTML += ` \u{1F3C1}` 
    }
    
}