let megaSena = []
let lista = document.getElementById('resultado')
function enviarNumeros(){
    let entradaInput = document.getElementById('entrada')
    if( entradaInput.value < 6 || entradaInput.value > 9 ){
        alert('DIGITE UM NUMERO ENTRE 6 E 9')
        return []
    }else{
        for(let i=0; i < entradaInput.value; i++){
            let Nrandom = Math.floor(Math.random() * 60)
            megaSena.push(Nrandom)
            megaSena.map((item)=>{
                return item
            })
          
        }
    }
}

console.log(megaSena)