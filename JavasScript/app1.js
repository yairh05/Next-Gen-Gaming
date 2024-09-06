//variables del carrito de compras y el contador de productos
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

// Toggle del carrito, ocultar y mostrar con click
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

//espera que la pagina carge para poder agregar productos
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    //elimina los items del carrito
    let botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for (let i = 0; i < botonesEliminarItem.length; i++) {
        let button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito);
    }
    //permite agregar mas del mismo producto en el carrito
    let botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for (let i = 0; i < botonesSumarCantidad.length; i++) {
        let button = botonesSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
    }
    //resta del mismo producto
    let botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for (let i = 0; i < botonesRestarCantidad.length; i++) {
        let button = botonesRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
    }
    //agrega los productos que se van a comprar
    let botonesAgregarAlCarrito = document.getElementsByClassName('boton-producto');
    for (let i = 0; i < botonesAgregarAlCarrito.length; i++) {
        let button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }
    //listo para pagar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);
}
//limpia el local storage cuando se de click en el boton pagar
function pagarClicked() {
    // Mostrar un mensaje de agradecimiento usando SweetAlert
    Swal.fire({
        title: '¡Gracias por tu compra!',
        text: 'Tu pedido ha sido procesado exitosamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        // Vaciar el carrito en el DOM
        let carritoItems = document.getElementsByClassName('carrito-items')[0];
        while (carritoItems.hasChildNodes()) {
            carritoItems.removeChild(carritoItems.firstChild);
        }

        // Actualizar el total del carrito y el contador de productos
        actualizarTotalCarrito();
        actualizarContadorProductos();

        // Ocultar el carrito despues de la compra
        ocultarCarrito();

        // Vaciar el carrito en localStorage
        localStorage.removeItem('carrito');
    });
}
//oculta el carrito cuando se pagan los productos
function ocultarCarrito() {
    containerCartProducts.classList.add('hidden-cart');
}

//toma la informacion de los productos 
function agregarAlCarritoClicked(event) {
    let button = event.target;
    let item = button.parentElement;
    let titulo = item.getElementsByClassName('titulo-produto')[0].innerText;
    let precio = item.getElementsByClassName('precio-producto')[0].innerText;
    let imagenSrc = item.getElementsByClassName('img-producto')[0].src;

    
    agregarItemAlCarrito(titulo, precio, imagenSrc);
    actualizarContadorProductos();

}

//el producto agregado no puede volver a agregarse 
function agregarItemAlCarrito(titulo, precio, imagenSrc, cantidad = 1, mostrarAlerta = true) {
    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];
    let nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');

    for (let i = 0; i < nombresItemsCarrito.length; i++) {
        if (nombresItemsCarrito[i].innerText === titulo) {
            if (mostrarAlerta) {
                alert("El item ya se encuentra en el carrito");
            }
            return;
        }
    }

    //lógica para agregar el item al DOM y actualizar localStorage
    let item = document.createElement('div');
    item.classList.add('item');
    let itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="${cantidad}" class="carrito-item-cantidad" readonly>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    // Actualizar localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ titulo, precio, imagenSrc, cantidad });
    localStorage.setItem('carrito', JSON.stringify(carrito));

    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);
    item.getElementsByClassName('restar-cantidad')[0].addEventListener('click', restarCantidad);
    item.getElementsByClassName('sumar-cantidad')[0].addEventListener('click', sumarCantidad);

    actualizarTotalCarrito();
}

// Cargar carrito desde el local storage al cargar la página
function cargarCarritoDesdeLocalStorage() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];
    itemsCarrito.innerHTML = '';
    
    // Limpiar el contenido actual
    carrito.forEach(item => {
        agregarItemAlCarrito(item.titulo, item.precio, item.imagenSrc, item.cantidad, false);
    });
    actualizarContadorProductos();
    actualizarTotalCarrito();
}


// Llama a esta función cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarCarritoDesdeLocalStorage);

//----------init---------------//
function eliminarItemCarrito(event) {
    let buttonClicked = event.target;
    let titulo = buttonClicked.parentElement.parentElement.querySelector('.carrito-item-titulo').innerText;
    buttonClicked.parentElement.parentElement.remove();

    // Actualizar localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.titulo !== titulo);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarTotalCarrito();
    actualizarContadorProductos();
    
}
function sumarCantidad(event) {
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let cantidadActual = parseInt(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let titulo = selector.parentElement.querySelector('.carrito-item-titulo').innerText;

    // Actualizar la cantidad
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;

    // Actualizar localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.map(item => {
        if (item.titulo === titulo) {
            item.cantidad = cantidadActual;
        }
        return item;
    });
    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarTotalCarrito();
    actualizarContadorProductos();
}

function restarCantidad(event) {
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let cantidadActual = parseInt(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let titulo = selector.parentElement.querySelector('.carrito-item-titulo').innerText;

    if (cantidadActual > 1) {
        cantidadActual--;
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;

        // Actualizar localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito = carrito.map(item => {
            if (item.titulo === titulo) {
                item.cantidad = cantidadActual;
            }
            return item;
        });
        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarTotalCarrito();
        actualizarContadorProductos();
    }
}

function actualizarTotalCarrito() {
    let carritoContenedor = document.getElementsByClassName('carrito')[0];
    let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    let total = 0;

    for (let i = 0; i < carritoItems.length; i++) {
        let item = carritoItems[i];
        let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        let precio = parseFloat(precioElemento.innerText.replace('$', '').replace('.', ''));
        let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0].value;
        total += precio * cantidadItem;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ",00";
}
// Función para actualizar el contador de productos en el header
function actualizarContadorProductos() {
    const productCountInput = document.querySelector('.contador-productos');
    const carritoItems = document.getElementsByClassName('carrito-item-cantidad');
    let totalProductos = 0;

    for (let i = 0; i < carritoItems.length; i++) {
        totalProductos += parseInt(carritoItems[i].value);
    }

    productCountInput.value = totalProductos;
}

