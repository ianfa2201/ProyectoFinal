
function validar(){
    function nombre(){
        var nombre = document.getElementById("nombre").value;
        if(nombre.length < 5){
            alert("Deben haber más de 5 carácteres");
        }
    }
    function telefono(){
        var telefono = document.getElementById("telefono")
        if(telefono.length < 7) {
            alert("Deber haber más de 7 digitos")
        }
    }
    function textField(){
        var textfield = document.getElementById("textField")
        if (textfield.length < 50 && textfield.length > 200) {
            alert("El mensaje deben estar entre 50 y 200 carácteres")
        }
    }
}