let amigo = {
     nome: 'Jose',
     peso: 85.4,
     sexo: 'M',
     engordar(p=0){
        console.log('Engordou')
        this.peso +=p
     }
}

amigo.engordar(6)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)