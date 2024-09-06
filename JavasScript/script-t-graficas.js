//obtencion de datos para el producto 2 (procesador2)
document.getElementById('tarjetaGrafica1').addEventListener('click', function(event) {
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
            La MSI GeForce RTX 3050 Ventus 2X es una tarjeta gráfica diseñada para ofrecer un rendimiento sólido en juegos de nivel medio. Equipado con 8 GB de memoria GDDR6 y tecnología de overclocking (OC), este modelo combina potencia y eficiencia para mejorar la experiencia de juego y la calidad visual en títulos modernos. Su diseño de doble ventilador ayuda a mantener temperaturas óptimas, mientras que la tecnología de trazado de rayos y DLSS 2.0 de NVIDIA permiten una experiencia gráfica más inmersiva y fluida.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: NVIDIA GeForce RTX 3050
            </li>
            <li>Memoria: 8 GB GDDR6
            </li>
            <li>Interfaz de memoria: 128-bit
            </li>
            <li>Velocidad de memoria: Hasta 14 Gbps
            </li>
            <li>Núcleos CUDA: 2048
            </li>
            <li>Tecnología de overclocking (OC): Mejoras en el rendimiento para juegos más exigentes
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
document.getElementById('tarjetaGrafica2').addEventListener('click', function(event) {
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
            La MSI GeForce RTX™ 4060 es una tarjeta gráfica potente y eficiente, diseñada para gamers y creadores de contenido que buscan un rendimiento excepcional en resoluciones de 1080p y 1440p. Con 8 GB de memoria GDDR6, esta GPU aprovecha las últimas tecnologías de NVIDIA, como el trazado de rayos en tiempo real y DLSS 3.0, para ofrecer imágenes detalladas y experiencias de juego fluidas. Su diseño térmico optimizado garantiza un funcionamiento fresco y silencioso, lo que la convierte en una excelente opción para sistemas de gama media.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: NVIDIA GeForce RTX™ 4060
            </li>
            <li>Memoria: 8 GB GDDR6
            </li>
            <li>Interfaz de memoria: 128-bit
            </li>
            <li>Velocidad de memoria: Hasta 17 Gbps
            </li>
            <li>Núcleos CUDA: 3072
            </li>
            <li>Tecnología de trazado de rayos: Soporte para trazado de rayos en tiempo real
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
document.getElementById('tarjetaGrafica3').addEventListener('click', function(event) {
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
            La ASUS Dual Radeon RX 7600 OC es una tarjeta gráfica de alto rendimiento diseñada para ofrecer una experiencia de juego fluida y vibrante en resoluciones de 1080p y 1440p. Con 8 GB de memoria GDDR6, esta GPU está optimizada para soportar juegos modernos con ajustes altos y proporciona una experiencia gráfica mejorada gracias a la arquitectura RDNA 3 de AMD. El diseño de doble ventilador de ASUS asegura un enfriamiento eficiente, lo que mantiene la tarjeta funcionando a temperaturas óptimas incluso durante sesiones de juego intensivas.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: AMD Radeon RX 7600
            </li>
            <li>Memoria: 8 GB GDDR6
            </li>
            <li>Interfaz de memoria: 128-bit
            </li>
            <li>Velocidad de memoria: Hasta 18 Gbps
            </li>
            <li>Puertos: 1 x HDMI 2.1, 3 x DisplayPort 2.1
            </li>
            <li>Overclocking: Versión OC para un rendimiento mejorado
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
document.getElementById('tarjetaGrafica4').addEventListener('click', function(event) {
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
            La ASUS TUF Radeon RX 7900 XTX es una tarjeta gráfica de gama alta diseñada para ofrecer un rendimiento excepcional en juegos y aplicaciones intensivas. Equipado con 24 GB de memoria GDDR6, este modelo utiliza la arquitectura RDNA 3 de AMD para proporcionar una experiencia de juego fluida en resoluciones 4K y más allá. Su robusto diseño TUF garantiza durabilidad y fiabilidad, mientras que el avanzado sistema de refrigeración asegura temperaturas óptimas incluso durante largas sesiones de juego. Ideal para jugadores entusiastas y creadores de contenido que buscan lo mejor en rendimiento gráfico.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: AMD Radeon RX 7900 XTX
            </li>
            <li>Memoria: 24 GB GDDR6
            </li>
            <li>Interfaz de memoria: 384-bit
            </li>
            <li>Velocidad de memoria: Hasta 20 Gbps
            </li>
            <li>Arquitectura: RDNA 3
            </li>
            <li>Salidas adicionales: Soporte para configuraciones de múltiples monitores
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
document.getElementById('tarjetaGrafica5').addEventListener('click', function(event) {
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
            La ASUS TUF Gaming Radeon RX 7700 XT OC Edition es una tarjeta gráfica diseñada para gamers y creadores de contenido que buscan un rendimiento sólido en resoluciones de 1440p y 4K. Equipado con 12 GB de memoria GDDR6, esta GPU aprovecha la arquitectura RDNA 3 de AMD para ofrecer una experiencia de juego fluida y detallada. El modelo OC Edition cuenta con un diseño de refrigeración robusto y componentes de alta calidad que garantizan estabilidad y durabilidad en largas sesiones de uso intensivo.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: AMD Radeon RX 7700 XT
            </li>
            <li>Memoria: 12 GB GDDR6
            </li>
            <li>Interfaz de memoria: 192-bit
            </li>
            <li>Velocidad de memoria: Hasta 18 Gbps
            </li>
            <li>Núcleos Stream: 2560
            </li>
            <li>Ventiladores: Sistema de refrigeración de doble ventilador TUF para una mejor disipación del calor
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
document.getElementById('tarjetaGrafica6').addEventListener('click', function(event) {
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
            La MSI Ventus XS OC GeForce GTX 1650 es una tarjeta gráfica orientada a gamers que buscan un rendimiento sólido a un precio accesible. Con 4 GB de memoria GDDR6 y un diseño de doble ventilador, esta GPU ofrece una excelente relación entre coste y rendimiento para juegos en 1080p. Su arquitectura Turing y el overclocking de fábrica mejoran la velocidad y la eficiencia, permitiendo jugar a títulos modernos con configuraciones de calidad media a alta. La solución de refrigeración de doble ventilador ayuda a mantener la tarjeta en temperaturas óptimas durante sesiones prolongadas.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: NVIDIA GeForce GTX 1650
            </li>
            <li>Interfaz de memoria: 128-bit
            </li>
            <li>Memoria: 4 GB GDDR6
            </li>
            <li>Arquitectura: Turing
            </li>
            <li>Overclocking: Versión OC para un rendimiento mejorado
            </li>
            <li>Puertos: 1 x HDMI 2.0b, 1 x DisplayPort 1.4, 1 x DVI-D
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
document.getElementById('tarjetaGrafica7').addEventListener('click', function(event) {
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
            La GIGABYTE RTX™ 4060 Ti 8 GB GDDR6 Windforce OC es una tarjeta gráfica de alto rendimiento que ofrece una excelente relación entre potencia y eficiencia para jugadores y creadores de contenido. Basada en la arquitectura Ada Lovelace de NVIDIA, esta GPU proporciona un rendimiento impresionante en resoluciones de 1080p y 1440p, con soporte para tecnologías avanzadas como el trazado de rayos y DLSS 3.0. El modelo Windforce OC cuenta con un sistema de refrigeración eficiente y overclocking de fábrica para mejorar aún más el rendimiento, manteniendo la tarjeta en temperaturas óptimas durante sesiones de uso intensivo.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: NVIDIA GeForce RTX™ 4060 Ti
            </li>
            <li>Memoria: 8 GB GDDR6
            </li>
            <li>Interfaz de memoria: 128-bit
            </li>
            <li>Velocidad de memoria: Hasta 17 Gbps
            </li>
            <li>Núcleos CUDA: 4352
            </li>
            <li>Ventiladores: Sistema de refrigeración Windforce con diseño de triple ventilador para una refrigeración eficiente
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
document.getElementById('tarjetaGrafica8').addEventListener('click', function(event) {
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
            La ASUS TUF Radeon RX 7900 XTX es una tarjeta gráfica de gama alta diseñada para ofrecer un rendimiento excepcional en juegos y aplicaciones intensivas. Equipado con 24 GB de memoria GDDR6, este modelo utiliza la arquitectura RDNA 3 de AMD para proporcionar una experiencia de juego fluida en resoluciones 4K y más allá. Su robusto diseño TUF garantiza durabilidad y fiabilidad, mientras que el avanzado sistema de refrigeración asegura temperaturas óptimas incluso durante largas sesiones de juego. Ideal para jugadores entusiastas y creadores de contenido que buscan lo mejor en rendimiento gráfico.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: AMD Radeon RX 7900 XTX
            </li>
            <li>Memoria: 24 GB GDDR6
            </li>
            <li>Interfaz de memoria: 384-bit
            </li>
            <li>Velocidad de memoria: Hasta 20 Gbps
            </li>
            <li>Arquitectura: RDNA 3
            </li>
            <li>Salidas adicionales: Soporte para configuraciones de múltiples monitores
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
document.getElementById('tarjetaGrafica9').addEventListener('click', function(event) {
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
            La MSI GeForce RTX 3050 Ventus 2X 6GB OC es una tarjeta gráfica diseñada para ofrecer un rendimiento sólido en juegos a 1080p con una excelente relación calidad-precio. Equipado con 6 GB de memoria GDDR6 y tecnología de overclocking (OC), este modelo es ideal para gamers que desean jugar a títulos modernos con configuraciones gráficas medias a altas. Su diseño de doble ventilador proporciona una refrigeración eficiente, ayudando a mantener la tarjeta a temperaturas óptimas durante sesiones prolongadas de juego.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Memoria: 6 GB GDDR6
            </li>
            <li>Interfaz de memoria: 192-bit
            </li>
            <li>Velocidad de memoria: Hasta 14 Gbps
            </li>
            <li>Núcleos CUDA: 2048
            </li>
            <li>Arquitectura: Ampere
            </li>
            <li>Puertos: 1 x HDMI 2.1, 3 x DisplayPort 1.4a
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
document.getElementById('tarjetaGrafica10').addEventListener('click', function(event) {
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
            La PULSE 4K UHD RX 6800 es una tarjeta gráfica de gama alta diseñada para ofrecer un rendimiento excepcional en juegos y aplicaciones exigentes, especialmente en resoluciones 4K. Equipado con 16 GB de memoria GDDR6 y la arquitectura RDNA 2 de AMD, este modelo está optimizado para brindar una experiencia de juego fluida y detallada, incluso en configuraciones gráficas ultra. Su robusto sistema de refrigeración con tres ventiladores asegura una eficiente disipación del calor, lo que permite mantener la tarjeta a temperaturas óptimas durante largas sesiones de uso intensivo.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>GPU: AMD Radeon RX 6800
            </li>
            <li>Memoria: 16 GB GDDR6
            </li>
            <li>Interfaz de memoria: 256-bit
            </li>
            <li>Velocidad de memoria: Hasta 16 Gbps
            </li>
            <li>Núcleos Stream: 3840
            </li>
            <li>Arquitectura: RDNA 2
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
