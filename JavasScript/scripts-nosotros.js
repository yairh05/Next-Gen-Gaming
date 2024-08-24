// Obtiene el modal
var modal = document.getElementById("modal");

// Obtiene el botón que abre el modal
var btn = document.getElementById("openModalBtn");

// Obtiene el elemento <span> que cierra el modal
var span = document.getElementsByClassName ("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera del modal, lo cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "";
    }
}

