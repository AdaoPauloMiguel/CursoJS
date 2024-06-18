
function mostra() {

    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 18  Caso seja necessario teste manual das horas. 
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `<p>Bom Dia!</p>`
        img.src = 'manha.png'
        document.body.style.background = '#e8d5b9'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += `<p>Boa Tarde!</p>`
        img.src = 'tarde.png'
        document.body.style.background = '#fbba9c'
    } else {
        img.src = 'noite.png'
        msg.innerHTML += `<p>Boa Noite!</p>`
        document.body.style.background = '#372d48'
    }
}
