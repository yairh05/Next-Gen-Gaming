//obtencion de datos para el producto 2 (procesador2)
document.getElementById('procesador1').addEventListener('click', function(event) {
    if (event.target.classList.contains('boton-producto')) {
        return;
    }
    // Obtener información del producto desde los atributos del div
    const name = this.querySelector('.titulo-produto').textContent;
    const description = this.querySelector('.titulo-produto').textContent;
    const image = this.querySelector('.img-producto').src;
    const price = this.querySelector('.precio-producto').textContent;

    Swal.fire({
        title: name,
        html: `
            <img src="${image}" alt="Foto del producto" style="width:30%;max-height:300px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            El Intel Core i5-14400F es un procesador diseñado para ofrecer un rendimiento equilibrado para tareas cotidianas, gaming y aplicaciones más exigentes. Al carecer de gráficos integrados, este procesador es más asequible en comparación con sus equivalentes con gráficos integrados, y está dirigido principalmente a entusiastas del gaming y a aquellos que buscan un buen rendimiento en multitarea y productividad.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Basado en la arquitectura Raptor Lake (14ª generación), proceso de fabricación de 10nm.
            </li>
            <li>6 núcleos físicos,
            12 hilos gracias a la tecnología Hyper-Threading..
            </li>
            <li>Frecuencia base: 2.9 GHz,
            frecuencia turbo máxima: 4.4 GHz.
            </li>
            <li>Caché L3: 18 MB,
            Caché L2: 6 MB (1 MB por núcleo).
            </li>
            <li>Soporta memoria DDR4 y DDR5,
            capacidad máxima de memoria: 128 GB y
            Soporte para memoria de canal dual.
            </li>
            <li>El Intel Core i5-14400F ofrece una excelente relación calidad-precio para aquellos que buscan un procesador potente sin gráficos integrados, especialmente en combinación con una tarjeta gráfica dedicada para maximizar el rendimiento en juegos y aplicaciones gráficas.
            </li>
            </ul>
            </p>
            </div>
            <br>
            <p style="font-size:30px;">
            <strong>Precio:</strong> ${price}
            </p>
        `,
        grow: 'fullscreem',
        allowOutsideClick: false,
        allowScapeKey: false,
        allowEnterKey: false,
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'rgb(29, 0, 91)',
        cancelButtonColor: '#d33',
        width: '80%',
        padding: '3em',
        background: 'white',
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir al carrito de compras
            window.location.href = '#';
        }
    });
});

//obtencion de datos para el producto 2 (procesador2)
document.getElementById('procesador2').addEventListener('click', function(event) {
    if (event.target.classList.contains('boton-producto')) {
        return;
    }
    // Obtener información del producto desde los atributos del div
    const name = this.querySelector('.titulo-produto').textContent;
    const description = this.querySelector('.titulo-produto').textContent;
    const image = this.querySelector('.img-producto').src;
    const price = this.querySelector('.precio-producto').textContent;

    Swal.fire({
        title: name,
        html: `
            <img src="${image}" alt="Foto del producto" style="width:30%;max-height:300px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            El AMD Ryzen 7 7700X es un procesador de la serie Ryzen 7000 de AMD, basado en la arquitectura Zen 4. Es una opción popular entre los entusiastas del gaming y los creadores de contenido debido a su rendimiento excepcional y capacidades de multitarea.
            <br>
            Es un procesador de alto rendimiento diseñado para ofrecer una experiencia superior en gaming, creación de contenido y aplicaciones intensivas en recursos. Con una arquitectura avanzada y soporte para las tecnologías más recientes, proporciona un equilibrio perfecto entre potencia y eficiencia.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Basado en la arquitectura Zen 4, proceso de fabricación de 5nm.
            </li>
            <li>6 8 núcleos físicos, 16 hilos gracias a la tecnología Simultaneous Multithreading (SMT).
            </li>
            <li>Frecuencia base: 4.5 GHz, frecuencia turbo máxima: Hasta 5.4 GHz.
            </li>
            <li>Caché L3: 32 MB, caché L2: 8 MB (1 MB por núcleo).
            </li>
            <li>Soporta memoria DDR5, capacidad máxima de memoria: 128 GB y soporte para memoria de canal dual.
            </li>
            <li>Ideal para juegos de alta gama y eSports, proporcionando un rendimiento excelente con tasas de fotogramas altas y estables.
            </li>
            </ul>
            </p>
            </div>
            <br>
            <p style="font-size:30px;">
            <strong>Precio:</strong> ${price}
            </p>
        `,
        grow: 'fullscreem',
        allowOutsideClick: false,
        allowScapeKey: false,
        allowEnterKey: false,
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'rgb(29, 0, 91)',
        cancelButtonColor: '#d33',
        width: '80%',
        padding: '3em',
        background: 'white',
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir al carrito de compras
            window.location.href = '#';
        }
    });
});

//obtencion de datos para el producto 3 (procesador3)
document.getElementById('procesador3').addEventListener('click', function(event) {
    if (event.target.classList.contains('boton-producto')) {
        return;
    }
    // Obtener información del producto desde los atributos del div
    const name = this.querySelector('.titulo-produto').textContent;
    const description = this.querySelector('.titulo-produto').textContent;
    const image = this.querySelector('.img-producto').src;
    const price = this.querySelector('.precio-producto').textContent;

    Swal.fire({
        title: name,
        html: `
            <img src="${image}" alt="Foto del producto" style="width:30%;max-height:300px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            El Intel Core i3-12100F es un procesador de gama media-baja, diseñado para ofrecer un rendimiento decente en tareas cotidianas y gaming a un precio accesible. Gracias a su arquitectura moderna, proporciona mejoras significativas en rendimiento y eficiencia en comparación con generaciones anteriores.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Basado en la arquitectura Alder Lake, proceso de fabricación de 10nm.
            </li>
            <li>4 núcleos físicos, 8 hilos gracias a la tecnología Hyper-Threading.
            </li>
            <li>Frecuencia base: 3.3 GHz, frecuencia turbo máxima: 4.3 GHz..
            </li>
            <li>Soporta memoria DDR4 y DDR5, capacidad máxima de memoria: 128 GB y soporte para memoria de canal dual.
            </li>
            <li>Soporta PCIe 4.0, compatible con placas base con socket LGA 1700.
            </li>
            <li>El Intel Core i3-12100F es una opción económica que ofrece un buen rendimiento para tareas cotidianas y gaming ligero. Su arquitectura moderna y soporte para las últimas tecnologías lo convierten en una excelente elección para quienes buscan un procesador asequible y eficiente.
            </li>
            </ul>
            </p>
            </div>
            <br>
            <p style="font-size:30px;">
            <strong>Precio:</strong> ${price}
            </p>
        `,
        grow: 'fullscreem',
        allowOutsideClick: false,
        allowScapeKey: false,
        allowEnterKey: false,
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'rgb(29, 0, 91)',
        cancelButtonColor: '#d33',
        width: '80%',
        padding: '3em',
        background: 'white',
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir al carrito de compras
            window.location.href = '#';
        }
    });
});

//obtencion de datos para el producto 4 (procesador4)
document.getElementById('procesador4').addEventListener('click', function(event) {
    if (event.target.classList.contains('boton-producto')) {
        return;
    }
    // Obtener información del producto desde los atributos del div
    const name = this.querySelector('.titulo-produto').textContent;
    const description = this.querySelector('.titulo-produto').textContent;
    const image = this.querySelector('.img-producto').src;
    const price = this.querySelector('.precio-producto').textContent;

    Swal.fire({
        title: name,
        html: `
            <img src="${image}" alt="Foto del producto" style="width:30%;max-height:300px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            El AMD Ryzen 9 7900 es un procesador de alto rendimiento, orientado a entusiastas y profesionales que requieren una potencia de procesamiento excepcional. Con una arquitectura avanzada y un alto número de núcleos, este procesador es adecuado para multitarea intensa, renderizado 3D, y otras aplicaciones exigentes.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Basado en la arquitectura Zen 4, Proceso de fabricación de 5nm.
            </li>
            <li>12 núcleos físicos, 24 hilos gracias a la tecnología Simultaneous Multithreading (SMT).
            </li>
            <li>Frecuencia base: 4.0 GHz, Frecuencia turbo máxima: Hasta 5.4 GHz.
            </li>
            <li>Caché L3: 64 MB, Caché L2: 12 MB (1 MB por núcleo).
            </li>
            <li>Soporta memoria DDR5, Capacidad máxima de memoria: 128 GB y Soporte para memoria de canal dual.
            </li>
            <li>El AMD Ryzen 9 7900 es una elección excepcional para aquellos que buscan un procesador de alto rendimiento con la última tecnología. Su avanzada arquitectura y soporte para las últimas innovaciones lo hacen ideal para una amplia gama de aplicaciones, desde gaming de alta gama hasta tareas profesionales exigentes.
            </li>
            </ul>
            </p>
            </div>
            <br>
            <p style="font-size:30px;">
            <strong>Precio:</strong> ${price}
            </p>
        `,
        grow: 'fullscreem',
        allowOutsideClick: false,
        allowScapeKey: false,
        allowEnterKey: false,
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'rgb(29, 0, 91)',
        cancelButtonColor: '#d33',
        width: '80%',
        padding: '3em',
        background: 'white',
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir al carrito de compras
            window.location.href = '#';
        }
    });
});

//obtencion de datos para el producto 5 (procesador5)
document.getElementById('procesador5').addEventListener('click', function(event) {
    if (event.target.classList.contains('boton-producto')) {
        return;
    }
    // Obtener información del producto desde los atributos del div
    const name = this.querySelector('.titulo-produto').textContent;
    const description = this.querySelector('.titulo-produto').textContent;
    const image = this.querySelector('.img-producto').src;
    const price = this.querySelector('.precio-producto').textContent;

    Swal.fire({
        title: name,
        html: `
            <img src="${image}" alt="Foto del producto" style="width:30%;max-height:300px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            El AMD Ryzen 5 5600G es un procesador de la serie Ryzen 5000 basado en la arquitectura Zen 3. Está diseñado para ofrecer un buen rendimiento en gaming y aplicaciones de productividad, con gráficos integrados que lo hacen ideal para sistemas sin tarjeta gráfica dedicada.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Arquitectura: Zen 3, 7nm.
            </li>
            <li>Núcleos/Hilos: 6 núcleos y 12 hilos.
            </li>
            <li>Frecuencia Base/Turbo: 3.9 GHz / 4.4 GHz.
            </li>
            <li>Gráficos Integrados: Radeon Vega 7
            </li>
            <li>Memoria: Soporte DDR4, hasta 128 GB, canal dual..
            </li>
            <li>El Ryzen 5 5600G es una excelente opción para aquellos que buscan un procesador versátil con gráficos integrados de buen rendimiento.
            </li>
            </ul>
            </p>
            </div>
            <br>
            <p style="font-size:30px;">
            <strong>Precio:</strong> ${price}
            </p>
        `,
        grow: 'fullscreem',
        allowOutsideClick: false,
        allowScapeKey: false,
        allowEnterKey: false,
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'rgb(29, 0, 91)',
        cancelButtonColor: '#d33',
        width: '80%',
        padding: '3em',
        background: 'white',
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir al carrito de compras
            window.location.href = '#';
        }
    });
});

//obtencion de datos para el producto 6 (procesador6)
document.getElementById('procesador6').addEventListener('click', function(event) {
    if (event.target.classList.contains('boton-producto')) {
        return;
    }
    // Obtener información del producto desde los atributos del div
    const name = this.querySelector('.titulo-produto').textContent;
    const description = this.querySelector('.titulo-produto').textContent;
    const image = this.querySelector('.img-producto').src;
    const price = this.querySelector('.precio-producto').textContent;

    Swal.fire({
        title: name,
        html: `
            <img src="${image}" alt="Foto del producto" style="width:30%;max-height:300px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            El AMD Ryzen 5 8500G no es un modelo disponible en la línea de procesadores AMD Ryzen. Posiblemente, hay un error en la referencia del modelo.
            <br>
            Sin embargo, puedo proporcionar información sobre el AMD Ryzen 5 5600G o AMD Ryzen 5 4600G, que son procesadores populares de la serie Ryzen con gráficos integrados, o si te refieres a otro modelo específico, por favor indícalo.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Arquitectura: Zen 3, 7nm.
            </li>
            <li>Núcleos/Hilos: 6 núcleos y 12 hilos.
            </li>
            <li>Frecuencia Base/Turbo: 3.9 GHz / 4.4 GHz.
            </li>
            <li>Caché: 16 MB L3, 3 MB L2.
            </li>
            <li>Gráficos Integrados: Radeon Vega 7.
            </li>
            <li>Memoria: Soporte DDR4, hasta 128 GB, canal dual.
            </li>
            <li>El Ryzen 5 5600G es una excelente opción para aquellos que buscan un procesador versátil con gráficos integrados de buen rendimiento.
            </li>
            </ul>
            </p>
            </div>
            <br>
            <p style="font-size:30px;">
            <strong>Precio:</strong> ${price}
            </p>
        `,
        grow: 'fullscreem',
        allowOutsideClick: false,
        allowScapeKey: false,
        allowEnterKey: false,
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'rgb(29, 0, 91)',
        cancelButtonColor: '#d33',
        width: '80%',
        padding: '3em',
        background: 'white',
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir al carrito de compras
            window.location.href = '#';
        }
    });
});