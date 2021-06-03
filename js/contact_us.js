function validar(){

    var nombre = document.getElementById("nombre").value
    var telefono = document.getElementById("telefono").value
    var textfield = document.getElementById("mimensaje").value
    if(nombre.length < 5){
        alert("El nombre debe tener más de 5 carácteres")
        return false
    } else if(telefono.length < 7) {
        alert("El telefono deber tener más de 7 digitos")
        return false
    } else if (textfield.length < 50 || textfield.length > 200) {
        alert("El mensaje deben estar entre 50 y 200 carácteres")
        return false
    } else{
        alert("Los datos se han enviado con éxito. Pronto te contáctaremos", function(){
            return true
        })
    }

    
}