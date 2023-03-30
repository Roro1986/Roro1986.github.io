
//Función para el envio de mensajeria*/

function validar(){
    var nombre, apellido, mail, mensaje;
    nombre= document.getElementById("nombre").value;
    apellido= document.getElementById("apellido").value;
    mail= document.getElementById("mail").value;
    mensaje= document.getElementById("mensaje").value;

    if(nombre === "" || apellido === "" || mail==="" || mensaje==="" ){
        alert("Todos los campos son obligatorios")
        return false;
    }

    if(nombre || apellido || mail || mensaje ){
        alert("Mensaje enviado ¡Muchas gracias!")
        return true;
    }

}
