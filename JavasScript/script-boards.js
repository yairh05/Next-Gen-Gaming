//obtencion de datos para el producto 1 (board1)
document.getElementById('board1').addEventListener('click', function(event) {
     // Evitar que el popup se abra si se hace clic en el botón "Comprar"
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
            <img src="${image}" alt="Foto del producto" style="width:50%;max-height:280px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            ¡Riptide lleva el nombre de un tipo específico de corriente de agua con fuertes olas que se produce en el océano,
            lo que representa la filosofía de la fuerza ilimitada, tranquila y de doble cara del mar.
            Construido alrededor de potentes funciones relacionadas con los juegos, Riptide ha dado un gran golpe
            y ha sumergido a los usuarios en la sensación de estabilidad.!
            </p>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul><li>Soporta Socket AMD AM4 Ryzen™ 3000, 3000 G-Series, 4000 G-Series, 5000 y 5000 G-Series Desktop Processors</li>
            <li>1 PCIe 4.0 x16 Slot, 2 ranuras PCIe 3.0 x16, 1 PCIe 3.0 x1 Slot
            1 M.2 Key-E Para el WiFi</li>
            <li>Opciones de salida gráficoss: HDMI)</li>
            <li>Audio 7.1 canales HD (Realtek ALC897 Audio Codec), Nahimic Audio</li>
            <li>6 SATA3, 1 Hyper M.2 (PCIe Gen4 x4)
            1 Ultra M.2 (PCIe Gen3 x4 & SATA3)</li>
            <li>3 USB 3.2 Gen2 (Frontal Tipo-C, Trasero Tipo A+C)</li>
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
        confirmButtonText: 'cerrar',
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

//obtencion de datos para el producto 2 (board2)
document.getElementById('board2').addEventListener('click', function(event) {
    // Evitar que el popup se abra si se hace clic en el botón "Comprar"
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
            <img src="${image}" alt="Foto del producto" style="width:50%;max-height:280px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            ¡Riptide lleva el nombre de un tipo específico de corriente de agua con fuertes olas que se produce en el océano,
            lo que representa la filosofía de la fuerza ilimitada, tranquila y de doble cara del mar.
            Construido alrededor de potentes funciones relacionadas con los juegos, Riptide ha dado un gran golpe
            y ha sumergido a los usuarios en la sensación de estabilidad.!
            </p>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul><li>Soporta Socket AMD AM4 Ryzen™ 3000, 3000 G-Series, 4000 G-Series, 5000 y 5000 G-Series Desktop Processors</li>
            <li>1 PCIe 4.0 x16 Slot, 2 ranuras PCIe 3.0 x16, 1 PCIe 3.0 x1 Slot
            1 M.2 Key-E Para el WiFi</li>
            <li>Opciones de salida gráficoss: HDMI)</li>
            <li>Audio 7.1 canales HD (Realtek ALC897 Audio Codec), Nahimic Audio</li>
            <li>6 SATA3, 1 Hyper M.2 (PCIe Gen4 x4)
            1 Ultra M.2 (PCIe Gen3 x4 & SATA3)</li>
            <li>3 USB 3.2 Gen2 (Frontal Tipo-C, Trasero Tipo A+C)</li>
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
//obtencion de datos para el producto 3 (board3)
document.getElementById('board3').addEventListener('click', function(event) {
    // Evitar que el popup se abra si se hace clic en el botón "Comprar"
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
            <img src="${image}" alt="Foto del producto" style="width:50%;max-height:280px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            ¡La BOARD ASROCK B650I LIGHTNING WIFI está diseñada para entusiastas de la tecnología y jugadores exigentes. Debajo de su elegante y robusto diseño se encuentran abundantes funciones avanzadas y capacidades de alto rendimiento. Esta placa base ofrece una nueva experiencia de juego y computación, perfecta para quienes buscan lo mejor en rendimiento y conectividad.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul><li>Compatible con procesadores AMD Socket AM5 Ryzen™ series 8000 y 7000</li>
            <li>8+2+1 Fase de potencia, Dr.MOS</li>
            <li>Soporta DDR5 7200+ (OC)</li>
            <li>Opciones de salida de gráficos: HDMI</li>
            <li>2 SATA3, 1 Blazing M.2 (PCIe Gen5x4), 1 Hyper M.2 (PCIe Gen4x4)</li>
            <li>Admite el instalador automático del controlador ASRock y BIOS Flashback</li>
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

//obtencion de datos para el producto 4 (board4)
document.getElementById('board4').addEventListener('click', function(event) {
    // Evitar que el popup se abra si se hace clic en el botón "Comprar"
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
            <img src="${image}" alt="Foto del producto" style="width:50%;max-height:280px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            Esta placa base cuenta con un encabezado RGB direccionable que permite conectar la placa base a dispositivos LED compatibles,
            como tiras, ventiladores de CPU, refrigeradores, chasis, etc. Los usuarios también pueden sincronizar dispositivos LED RGB
            a través de los accesorios certificados Polychrome RGB Sync para crear sus propios efectos de iluminación únicos.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul><li>Soporta DDR5 5600MHz</li>
            <li>Admite procesadores Intel® Core™ de 14.ª , 13.ª y 12.ª generación ( LGA1700 )</li>
            <li>4 SATA3, 1 Ultra M.2 (PCIe Gen3 x4)</li>
            <li>Opciones de salida de gráficos: HDMI, DisplayPort, D-Sub</li>
            <li>3 USB 3.2 Gen1 Type-A (1 trasero, 2 frontales),</li>
            <li>Compatible con el instalador de controladores automáticos de ASRock</li>
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

//obtencion de datos para el producto 5 (board5)
document.getElementById('board5').addEventListener('click', function(event) {
    // Evitar que el popup se abra si se hace clic en el botón "Comprar"
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
            <img src="${image}" alt="Foto del producto" style="width:50%;max-height:280px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            El rendimiento incomparable de las motherboards de GIGABYTE está garantizado por un diseño térmico innovador
            y optimizado para asegurar la mejor estabilidad de la CPU, el Chipset, el SSD
            y las bajas temperaturas bajo el rendimiento de las aplicaciones y los juegos a plena carga.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul><li>Socket AM5 de AMD: compatible con procesadores de las series AMD Ryzen™ 7000/Ryzen™ 8000/Ryzen™ 9000</li>
            <li>Rendimiento incomparable: solución VRM digital de 8+2+1 fases</li>
            <li>DDR5 de canal doble: 4*SMD DIMM con compatibilidad con módulos de memoria AMD EXPO™ e Intel ® XMP</li>
            <li>Diseño térmico avanzado y protección térmica M.2: para garantizar la estabilidad de la energía del VRM y el rendimiento del SSD M.2 25110</li>
            <li>EZ-Latch: ranura PCIe x16 con diseño de liberación rápida</li>
            <li>Q-Flash Plus: Actualice la BIOS sin instalar la CPU, la memoria ni la tarjeta gráfica</li>
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

//obtencion de datos para el producto 6 (board6)
document.getElementById('board6').addEventListener('click', function(event) {
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
            <img src="${image}" alt="Foto del producto" style="width:50%;max-height:280px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            Con los procesadores de más núcleos, el diseño térmico y de energía son más importantes para garantizar
            que la temperatura se mantenga más baja. El disipador PWM extendido y el diseño de circuito mejorado
            de MSI garantizan que incluso la CPU Intel de alta gama funcione a toda velocidad con las placas madre MSI.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul><li>Soporta procesadores 12a Gen Intel® Core™, Pentium® Gold y Celeron® para socket LGA 1700</li>
            <li>Soporta memoria DDR5, hasta 6200+(OC) MHz</li>
            <li>Solución térmica Premium: El disipador extendido y M.2 Shield Frozr están construidos para un sistema de alto desempeño y una operación sin pausa.</li>
            <li>Solución 2.5G LAN e Intel Wi-Fi 6E: Solución de red mejorada para el uso profesional y de multimedia. Ofrece una conexión de red segura, estable y rápida.</li>
            <li>Lightning USB 20G: El puerto USB 3.2 Gen 2×2 integrado ofrece una velocidad de transmisión de 20Gbps, 4 veces más rápido que USB 3.2 Gen 1</li>
            <li>Multi-GPU: Slots PCIe con Steel Armor. Soporta AMD Crossfire™</li>
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