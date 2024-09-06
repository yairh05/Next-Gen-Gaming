//obtencion de datos para el producto 1 (Torre1)
document.getElementById('Torre1').addEventListener('click', function(event) {
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
            La "NextGen Battle Cruixer" es una torre de computador de alta gama diseñada para ofrecer rendimiento excepcional y estética moderna. Con una estructura robusta y detalles futuristas, esta torre combina materiales de primera calidad con un diseño eficiente en términos de flujo de aire y gestión térmica.
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Diseño Innovador: La carcasa presenta líneas elegantes y detalles iluminados con RGB ajustable, brindando un aspecto impactante que se adapta a cualquier setup gaming o de trabajo avanzado.
            </li>
            <li>Espacio Optimizado: Ofrece amplio espacio interior para componentes de última generación, incluyendo soporte para placas madre ATX, micro-ATX y mini-ITX, múltiples tarjetas gráficas, y sistemas de refrigeración líquida.
            </li>
            <li>Gestión Térmica Superior: Con múltiples puntos de ventilación, filtros de polvo removibles y opciones para ventiladores adicionales, la NextGen Battle Cruixer mantiene tus componentes frescos incluso durante largas sesiones de uso intensivo.
            </li>
            <li>Accesibilidad y Expansión: Paneles laterales de fácil acceso, bahías de almacenamiento modulares y múltiples puertos USB, incluyendo USB 3.0 y USB-C en el panel frontal, garantizan que la personalización y la expansión sean simples y rápidas.
            </li>
            <li>Estética Personalizable: La iluminación RGB controlable y las opciones de panel lateral de vidrio templado o acero perforado permiten personalizar la apariencia de la torre según las preferencias del usuario.
            </li>
            <li>Multi-GPU: Slots PCIe con Steel Armor. Soporta AMD Crossfire™
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

//obtencion de datos para el producto 2 (Torre2)
document.getElementById('Torre2').addEventListener('click', function(event) {
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
            <img src="${image}" alt="Foto del producto" style="width:29%;max-height:300px;object-fit:cover;margin-bottom:15px;">
            <div>
            <p><strong>Descripción</strong>
            <br><br>
            La "NextGen Cruixer" es una torre de computador diseñada para ofrecer un rendimiento excepcional y un diseño moderno. Con un estilo elegante y detalles iluminados RGB, esta torre combina materiales de alta calidad con una gestión térmica eficiente. 
            <p>
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Diseño Elegante: Líneas modernas y opciones de iluminación RGB personalizable para un aspecto impactante.
            </li>
            <li>Espacio Amplio: Compatible con placas madre ATX, micro-ATX y mini-ITX, soporta múltiples tarjetas gráficas y sistemas de refrigeración líquida.
            </li>
            <li>Gestión Térmica Eficiente: Múltiples puntos de ventilación y filtros de polvo removibles para mantener los componentes frescos.
            </li>
            <li>Accesibilidad: Paneles laterales de fácil acceso y múltiples puertos USB, incluyendo USB-C, para una personalización y expansión rápidas.
            </li>
            <li>Estética Personalizable: Opciones de panel lateral de vidrio templado o acero perforado para ajustar la apariencia según las preferencias del usuario.
            </li>
            <li>La NextGen Cruixer es ideal para entusiastas del hardware y gamers que buscan una torre funcional y atractiva.
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

//obtencion de datos para el producto 3 (Torre3)
document.getElementById('Torre3').addEventListener('click', function(event) {
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
            La "NextGen Defender" es una torre de computador diseñada para ofrecer rendimiento superior y durabilidad. Con un diseño robusto y detalles iluminados RGB, esta torre combina materiales de alta calidad con una excelente gestión térmica.
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Diseño Robusto: Construcción sólida con opciones de iluminación RGB personalizable para un aspecto imponente.
            </li>
            <li>Espacio Generoso: Compatible con placas madre ATX, micro-ATX y mini-ITX, soporta múltiples tarjetas gráficas y sistemas de refrigeración líquida.
            </li>
            <li>Gestión Térmica Avanzada: Múltiples puntos de ventilación y filtros de polvo removibles para mantener los componentes frescos y limpios.
            </li>
            <li>Accesibilidad: Paneles laterales de fácil acceso y múltiples puertos USB, incluyendo USB-C, para una personalización y expansión sencillas.
            </li>
            <li>Estética Personalizable: Opciones de panel lateral de vidrio templado o acero perforado para ajustar la apariencia según las preferencias del usuario.
            </li>
            <li>La NextGen Defender es ideal para entusiastas del hardware y gamers que buscan una torre de computador que combine funcionalidad, resistencia y un diseño atractivo.
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

//obtencion de datos para el producto 4 (Torre4)
document.getElementById('Torre4').addEventListener('click', function(event) {
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
            La "NextGen Defender Pro" es una torre de computador diseñada para ofrecer rendimiento y durabilidad excepcionales con un estilo elegante y moderno.
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Diseño Imponente: Construcción robusta con un panel frontal de patrón entrecruzado que ofrece una estética contemporánea y eficiente flujo de aire.
            </li>
            <li>Espacio Amplio: Compatible con placas madre ATX, micro-ATX y mini-ITX, esta torre soporta múltiples tarjetas gráficas y sistemas de refrigeración líquida.
            </li>
            <li>Gestión Térmica Avanzada: Equipado con múltiples puntos de ventilación y un ventilador preinstalado, así como filtros de polvo removibles para mantener los componentes frescos y limpios.
            </li>
            <li>Accesibilidad y Expansión: Panel lateral de vidrio templado para fácil acceso y visualización de los componentes internos, además de múltiples puertos USB, incluyendo USB-C, para una conectividad rápida y sencilla.
            <li>Estética Personalizable: La opción de iluminación RGB y el panel lateral de vidrio permiten personalizar la apariencia según las preferencias del usuario.
            </li>
            <li>La NextGen Defender Pro es ideal para entusiastas del hardware y gamers que buscan una torre de computador que combine funcionalidad, resistencia y un diseño atractivo y moderno.
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

//obtencion de datos para el producto 5 (Torre5)
document.getElementById('Torre5').addEventListener('click', function(event) {
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
            La "Invader X" es una torre de ordenador diseñada para ofrecer un rendimiento superior y una estética elegante.
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Diseño Moderno: Construcción elegante con un panel lateral de vidrio templado que permite una vista clara de los componentes internos y añade un toque cómodo.
            </li>
            <li>Espacio Generoso: Compatible con placas madre ATX, micro-ATX y mini-ITX, esta torre soporta múltiples tarjetas gráficas y sistemas de refrigeración líquida.
            </li>
            <li>Gestión Térmica Avanzada: Equipado con múltiples ventiladores preinstalados y opciones de montaje adicionales, junto con filtros de polvo removibles, garantiza un flujo de aire eficiente y componentes frescos.
            </li>
            <li>Accesibilidad y Expansión: Panel lateral de fácil acceso y múltiples puertos USB en el frontal, incluyendo USB-C, para una conectividad rápida y sencilla.
            </li>
            <li>Estética Personalizable: Las opciones de iluminación RGB y el panel de vidrio templado permiten personalizar la apariencia según las preferencias del usuario.
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

//obtencion de datos para el producto 6 (Torre6)
document.getElementById('Torre6').addEventListener('click', function(event) {
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
            La "Starker Air" es una torre de ordenador de alto rendimiento diseñada para satisfacer las necesidades de los entusiastas del hardware y los jugadores más exigentes. Con un enfoque en la optimización del flujo de aire y un diseño estético, esta torre ofrece una combinación perfecta de funcionalidad y estilo.
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Diseño Avanzado y Estético: La Starker Air cuenta con un panel frontal perforado que no solo mejora el flujo de aire sino que también le da un aspecto moderno y agresivo. Las franjas de iluminación RGB en el frontal añaden un toque personalizado y elegante que se puede ajustar según las preferencias del usuario.
            </li>
            <li>Panel Lateral de Vidrio Templado: Un panel lateral de vidrio templado proporciona una vista clara de los componentes internos, permitiendo a los usuarios mostrar sus configuraciones de hardware de alta gama con orgullo.
            </li>
            <li>Compatibilidad Versátil: Esta torre es compatible con placas madre ATX, micro-ATX y mini-ITX, ofreciendo espacio suficiente para múltiples tarjetas gráficas de gran tamaño y soluciones de refrigeración líquida, facilitando la creación de configuraciones de alto rendimiento.
            </li>
            <li>Gestión Térmica Superior: Equipada con ventiladores preinstalados y soporte para ventiladores adicionales, la Starker Air garantiza una excelente gestión térmica. Los filtros de polvo removibles situados en el panel frontal, superior e inferior aseguran que el interior del chasis se mantenga limpio y libre de partículas, prolongando la vida útil de los componentes.
            </li>
            <li>Iluminación RGB Personalizable: Las franjas RGB en el frontal se pueden personalizar con diferentes efectos y colores, permitiendo a los usuarios adaptar la estética del chasis a su configuración personal y preferencias de iluminación.
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

//obtencion de datos para el producto 7 (Torre7)
document.getElementById('Torre7').addEventListener('click', function(event) {
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
            La NextGen Valor R es ideal para entusiastas del hardware y gamers que buscan una torre de ordenador que combine funcionalidad avanzada, una excelente gestión térmica y un diseño atractivo y moderno. Su capacidad de enfriamiento eficiente, junto con su compatibilidad versátil y su estética personalizable, la convierten en una opción destacada para cualquier
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Compatibilidad Amplia: Esta torre soporta placas madre ATX, micro-ATX y mini-ITX, ofreciendo espacio suficiente para múltiples tarjetas gráficas y soluciones de refrigeración líquida, lo que facilita la creación de configuraciones de alto rendimiento.
            </li>
            <li>Gestión Térmica Eficiente: Equipada con ventiladores preinstalados y soporte para ventiladores adicionales, la NextGen Valor R asegura una excelente gestión térmica. Los filtros de polvo removibles en los paneles frontales, superior e inferior mantienen el interior limpio y libre de polvo.
            </li>
            <li>Accesibilidad y Conectividad: Los paneles laterales de fácil acceso permiten una instalación y mantenimiento rápido de los componentes. Además, cuenta con múltiples puertos USB en el panel frontal, incluido USB 3.0, para una conectividad rápida y eficiente con dispositivos periféricos.
            </li>
            <li>Estética Personalizable: Las opciones de iluminación RGB y el panel de vidrio templado permiten personalizar la apariencia de la torre según las preferencias del usuario, creando un ambiente visualmente atractivo y cohesivo.
            </li>
            <li>Diseño Moderno y Funcional: Con un panel frontal perforado que mejora el flujo de aire y un acabado elegante, la NextGen Valor R destaca en cualquier configuración. El logo iluminado en el frontal añade un toque distintivo y profesional.
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

//obtencion de datos para el producto 8 (Torre8)
document.getElementById('Torre8').addEventListener('click', function(event) {
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
            La "NextGen Valor Storm S" es una torre de computadora de alto rendimiento, diseñada para los entusiastas del hardware y jugadores que buscan una combinación perfecta de funcionalidad, durabilidad y estética moderna.
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Diseño Robustamente Moderno: Con un panel frontal de diseño perforado que mejora el flujo de aire y un acabado elegante y resistente, la NextGen Valor Storm S es tanto funcional como estéticamente impresionante.
            </li>
            <li>Panel Lateral de Vidrio Templado: El panel lateral de vidrio templado no solo permite una vista clara de los componentes internos, sino que también añade un toque sofisticado al diseño, permitiendo a los usuarios mostrar su hardware con estilo.
            </li>
            <li>Compatibilidad Amplia: Esta torre es compatible con placas madre ATX, micro-ATX y mini-ITX, ofreciendo espacio suficiente para múltiples tarjetas gráficas y sistemas de refrigeración líquida, facilitando la creación de configuraciones de alto rendimiento.
            </li>
            <li>Accesibilidad y Expansión: Panel lateral de vidrio templado para fácil acceso y visualización de los componentes internos, además de múltiples puertos USB, incluyendo USB-C, para una conectividad rápida y sencilla.
            </li>
            <li>Gestión Térmica Eficiente: Equipada con ventiladores preinstalados y soporte para ventiladores adicionales, la NextGen Valor Storm S asegura una excelente gestión térmica. Los filtros de polvo removibles en los paneles frontales, superior e inferior mantienen el interior limpio y libre de polvo, prolongando la vida útil de los componentes.
            </li>
            <li>Espacio Generoso para Componentes: La NextGen Valor Storm S ofrece un espacio interior que permite la instalación de componentes de gran tamaño, como tarjetas gráficas de alta gama y sistemas de refrigeración avanzada. Además, ofrece una excelente gestión de cables, manteniendo el interior ordenado y optimizado para el flujo de aire.
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

//obtencion de datos para el producto 9 (Torre9)
document.getElementById('Torre9').addEventListener('click', function(event) {
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
            La NextGen XPG Invader es ideal para aquellos que buscan una torre de ordenador que combine diseño moderno, funcionalidad avanzada y una excelente gestión térmica. Su capacidad de enfriamiento eficiente, junto con su compatibilidad versátil y su estética personalizable, la convierten en una opción destacada para cualquier configuración de PC de gama alta.
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Espacio Generoso para Componentes: La NextGen XPG Invader ofrece un espacio interior que permite la instalación de componentes de gran tamaño, como tarjetas gráficas de alta gama y sistemas de refrigeración avanzada. Además, ofrece una excelente gestión de cables, manteniendo el interior ordenado y optimizado para el flujo de aire.
            </li>
            <li>Estética Personalizable: Las opciones de iluminación RGB y el panel de vidrio templado permiten personalizar la apariencia de la torre según las preferencias del usuario, creando un ambiente visualmente atractivo y cohesivo. Los detalles de iluminación se pueden ajustar para complementar cualquier configuración de hardware.
            </li>
            <li>Accesibilidad y Conectividad: Los paneles laterales de fácil acceso permiten una instalación y mantenimiento rápido de los componentes. Además, cuenta con múltiples puertos USB en el panel frontal, incluyendo USB 3.0 y USB-C, para una conectividad rápida y eficiente con dispositivos periféricos.
            </li>
            <li>Gestión Térmica Eficiente: Equipada con ventiladores preinstalados y soporte para ventiladores adicionales, la NextGen XPG Invader garantiza una excelente gestión térmica. Los filtros de polvo removibles en los paneles frontales, superior e inferior mantienen el interior limpio y libre de polvo, prolongando la vida útil de los componentes.
            </li>
            <li>Diseño Elegante y Funcional: Con un panel frontal perforado que optimiza el flujo de aire y un acabado elegante, la NextGen XPG Invader no solo es funcional, sino también estéticamente impresionante. El panel lateral de vidrio templado proporciona una vista clara de los componentes internos, permitiendo a los usuarios mostrar sus configuraciones de hardware con estilo.
            </li>
            <li>Compatibilidad Versátil: Esta torre es compatible con placas madre ATX, micro-ATX y mini-ITX, ofreciendo espacio suficiente para múltiples tarjetas gráficas y soluciones de refrigeración líquida, lo que facilita la creación de configuraciones de alto rendimiento.
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

//obtencion de datos para el producto 10 (Torre10)
document.getElementById('Torre10').addEventListener('click', function(event) {
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
            El NextGen XPG Vallor es un elegante chasis para torre de computadora diseñado para proporcionar un rendimiento óptimo y una estética moderna. Con su estructura robusta y sus características avanzadas, el Vallor es ideal para gamers y entusiastas del hardware que buscan un equilibrio entre funcionalidad y estilo.
            </div>
            <div>
            <br>
            <h4 style="text-aling: center;">Caracteristicas</h4>
            </div>
            <div style="text-align: left;">
            <br>
            <ul>
            <li>Diseño Espacioso: Soporta placas base ATX, Micro-ATX y Mini-ITX, ofreciendo suficiente espacio para componentes de alto rendimiento.
            </li>
            <li>Ventilación Eficiente: Incluye múltiples espacios para ventiladores y filtros de polvo para mantener el sistema fresco y limpio.
            </li>
            <li>Gestión de Cableado: Sistema de gestión de cables integrado para mantener el interior ordenado y facilitar el flujo de aire.
            </li>
            <li>Compatibilidad con GPU: Espacio amplio para tarjetas gráficas de hasta 400 mm de longitud.
            </li>
            <li>Almacenamiento versátil: Soporta varias configuraciones de unidades, incluyendo SSD y HDD, con bandejas de fácil acceso.
            </li>
            <li>Materiales de Alta Calidad: Construcción en acero y paneles de vidrio templado para una durabilidad y estética premium.
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