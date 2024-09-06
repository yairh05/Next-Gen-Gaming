//obtencion de datos para el producto 1 (Torre1)
document.getElementById('fuente1').addEventListener('click', function(event) {
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
            La Thermaltake Smart RGB 700W es una fuente de poder semimodular de 700W que combina rendimiento y estética. Ofrece iluminación RGB en su ventilador de 120 mm, certificación 80 Plus para eficiencia energética, y protecciones térmicas automáticas, lo que la convierte en una opción ideal para PCs de alto rendimiento.            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Mejora de temperatura: Los disipadores ROG cubren componentes críticos. Las temperaturas más bajas dan como resultado una vida útil más larga y reducción del ruido
            </li>
            <li>Refrigeración axial-tech: ventilador de 4.724 in con control PWM para bajo ruido y temperaturas mantenidas bajo control
            </li>
            <li>Compatibilidad con ATX 3.0: ROG Loki cumple con las directrices ATX 3.0 y viene con un cable PCIe de 16 pines que puede canalizar hasta 600 W de potencia a tarjetas gráficas PCIe Gen 5.0,
            </li>

            <li>Certificado 80 PLUS Platinum: hasta un 92% de eficiencia para bajo calor y ruido, y mayor fiabilidad
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
document.getElementById('fuente2').addEventListener('click', function(event) {
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
            La Thermaltake Toughpower GX2 600W es una fuente de poder totalmente modular con certificación 80 Plus Gold, diseñada para ofrecer una alta eficiencia y rendimiento estable en PCs de alto rendimiento. Su diseño incluye un ventilador silencioso de 120 mm y múltiples protecciones para garantizar la seguridad del sistema.<p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Mas poder: La certificación Lambda Aplusplus confirma que el último Thor ejerce un poder amenazante en absoluto sigilo.
            </li>
            <li>Coberturas de componentes: Los disipadores ROG cubren componentes críticos, entregando temperaturas más bajas y reducción de ruido.
            </li>
            <li>ventilador de tecnología axial de 5.315: Un ventilador de tecnología axial de 5.315 in con control PWM ofrece menos ruido y mantiene las térmicas bajo control.
            </li>
            <li>Condensadores 100% japoneses: Construido con condensadores 100% japoneses y otros componentes premium para lograr la certificación 80 Plus Platinum.
            </li>
            <li>Monitoreo de energía: La pantalla OLED monitorea el consumo de energía en tiempo real.
            </li>
            <li>Compatibilidad de hardware: La compatibilidad con Aura Sync le permite personalizar y sincronizar efectos de iluminación con otros hardware compatibles.
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
document.getElementById('fuente3').addEventListener('click', function(event) {
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
              La ASUS ROG Strix 1000W Gold Aura White Edition es una fuente de poder totalmente modular de 1000W, con certificación 80 Plus Gold y Cybenetics Lambda A+. Está diseñada para ofrecer un rendimiento superior en sistemas de alto rendimiento, con soporte para PCIe Gen 5.0 y sincronización Aura Sync. Su diseño en color blanco y ventilador de 135 mm la hacen ideal para construcciones elegantes y eficientes.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Reducción de temperaturas: Cuenta con una caja de aluminio que está acoplada al transformador de potencia interno, ayudando a reducir las temperaturas y los niveles de ruido. Disipador térmico para reducir temperaturas y niveles de ruido
            </li>
            <li>Coberturas de componentes: Los grandes disipadores ROG cubren componentes críticos, ofreciendo temperaturas y ruido más bajos que los diseños de referencia
            </li>
            <li>ventilador de tecnología axial: El diseño del ventilador de tecnología axial cuenta con un cubo de ventilador más pequeño que facilita aspas más largas y un anillo de barrera que aumenta la presión de aire hacia abajo
            </li>
            <li>Mas tiempo de duración: Los rodamientos de ventilador de doble bola pueden durar hasta el doble de tiempo que el diseño del rodamiento de mangas
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

document.getElementById('fuente4').addEventListener('click', function(event) {
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
              La Apevia ATX-ES700-RGB es una fuente de poder semimodular de 700W, ideal para juegos. Cuenta con un ventilador RGB de 120 mm que se controla térmicamente, adaptándose a la temperatura para un funcionamiento eficiente. Su interruptor de 115/230V permite flexibilidad en la conexión, y su diseño asegura un suministro de energía estable y seguro para componentes de alto rendimiento.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Fuente de alimentación semimodular: Apevia Fuente de alimentación semimodular para juegos Essence ATX de 700 W con carcasa arenada negra
            </li>
            <li>Ventilador RGB: El ventilador RGB viene con 16 modos de color
            </li>
            <li>Soporte para doble CPU: Soporta CPU de doble núcleo/cuádruple/multinúcleSoporta salida única de 12 V para un mayor uso de energía.
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


document.getElementById('fuente5').addEventListener('click', function(event) {
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
              
                La Corsair RM850 es una fuente de poder modular de 850W con certificación 80 Plus Gold, diseñada para alto rendimiento. Incluye un ventilador de 135 mm con control térmico para un funcionamiento silencioso y eficiente.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Potencia: 850W, adecuada para sistemas de alto rendimiento.
            </li>
            <li>Certificación: 80 Plus Gold, que asegura alta eficiencia energética.
            </li>
            <li>Modularidad: Completamente modular, lo que facilita la gestión de cables.
            </li>
            <li>Ventilador: 135 mm con control térmico para un funcionamiento silencioso y ajustado a la temperatura.
            </li>
             <li>Voltaje: Compatible con un rango de 100-240V, ideal para uso global.
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
