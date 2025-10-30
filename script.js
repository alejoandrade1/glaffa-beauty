window.onload = function() {
  const productos = [
    {nombre:"Labial Rosé Glam", descripcion:"Color duradero y textura suave.", precio:39900, imagen:"https://via.placeholder.com/200x200.png?text=Labial+Rosé"},
    {nombre:"Perfume Encanto", descripcion:"Aroma floral con toques de vainilla.", precio:99900, imagen:"https://via.placeholder.com/200x200.png?text=Perfume+Encanto"},
    {nombre:"Crema Hidratante Suavé", descripcion:"Hidratación profunda con extracto de almendras.", precio:54900, imagen:"https://via.placeholder.com/200x200.png?text=Crema+Suavé"},
    {nombre:"BB Cream Antiedad", descripcion:"Unifica el tono y combate signos de la edad.", precio:69300, imagen:"https://via.placeholder.com/200x200.png?text=BB+Cream"},
    {nombre:"Protector Solar Total Block SPF100", descripcion:"Bloqueador de amplio espectro.", precio:88000, imagen:"https://via.placeholder.com/200x200.png?text=Protector+SPF100"},
    {nombre:"Sérum Hidratante Instaglow", descripcion:"Tratamiento en gotas para piel luminosa.", precio:79900, imagen:"https://via.placeholder.com/200x200.png?text=Sérum+Instaglow"},
    {nombre:"Paleta Multifuncional 58th Edition", descripcion:"12 tonos para mirada, pómulo y labios.", precio:59900, imagen:"https://via.placeholder.com/200x200.png?text=Paleta+Multifuncional"},
    {nombre:"Labial Mate Elegance", descripcion:"Acabado mate perfecto para un look sofisticado.", precio:28000, imagen:"https://via.placeholder.com/200x200.png?text=Labial+Mate"},
    {nombre:"Máscara de Pestañas Volumen Extremo", descripcion:"Riza y da volumen sin grumos.", precio:47900, imagen:"https://via.placeholder.com/200x200.png?text=Mascara+Pestañas"},
    {nombre:"Gel Uñas Color Profesional", descripcion:"Color intenso y larga duración.", precio:65000, imagen:"https://via.placeholder.com/200x200.png?text=Gel+Uñas"},
    {nombre:"Loción Dulce Vanidad", descripcion:"Fragancia femenina con notas de vainilla.", precio:72500, imagen:"https://via.placeholder.com/200x200.png?text=Loción+Vanidad"},
    {nombre:"Set Cuidado de Piel Uña de Gato", descripcion:"Crema + suero para piel radiante.", precio:85000, imagen:"https://via.placeholder.com/200x200.png?text=Set+Cuidado"},
    {nombre:"Labial Hidratante Nude", descripcion:"Hidratación y color natural.", precio:36900, imagen:"https://via.placeholder.com/200x200.png?text=Labial+Nude"},
    {nombre:"Perfume Sensual Touch", descripcion:"Fragancia floral y especiada.", precio:102900, imagen:"https://via.placeholder.com/200x200.png?text=Perfume+Sensual"},
    {nombre:"Crema Antiarrugas Noche", descripcion:"Nutre y regenera la piel mientras duermes.", precio:94000, imagen:"https://via.placeholder.com/200x200.png?text=Crema+Noche"},
    {nombre:"BB Cream Iluminadora", descripcion:"Piel radiante y uniforme.", precio:71000, imagen:"https://via.placeholder.com/200x200.png?text=BB+Cream+Iluminadora"},
    {nombre:"Protector Solar Facial SPF50", descripcion:"Protección diaria ligera y efectiva.", precio:66000, imagen:"https://via.placeholder.com/200x200.png?text=Protector+SPF50"},
    {nombre:"Sérum Reafirmante Colágeno", descripcion:"Aumenta la elasticidad y firmeza de la piel.", precio:89900, imagen:"https://via.placeholder.com/200x200.png?text=Serum+Colágeno"},
    {nombre:"Paleta Ojos 24 Colores", descripcion:"Tonos vibrantes y neutros para cualquier ocasión.", precio:63900, imagen:"https://via.placeholder.com/200x200.png?text=Paleta+24+Colores"},
    {nombre:"Labial Líquido Matte", descripcion:"Color intenso y duradero.", precio:35000, imagen:"https://via.placeholder.com/200x200.png?text=Labial+Liquido"},
    {nombre:"Máscara Pestañas Volumen + Rizo", descripcion:"Pestañas impactantes sin grumos.", precio:49900, imagen:"https://via.placeholder.com/200x200.png?text=Mascara+Rizo"},
    {nombre:"Esmalte Gel Efecto Brillo", descripcion:"Brillo profesional sin lámpara UV.", precio:48000, imagen:"https://via.placeholder.com/200x200.png?text=Esmalte+Gel"},
    {nombre:"Loción Corporal Hidratante", descripcion:"Piel suave y perfumada todo el día.", precio:69000, imagen:"https://via.placeholder.com/200x200.png?text=Locion+Corporal"},
    {nombre:"Set Belleza Día y Noche", descripcion:"Incluye crema de día + crema de noche.", precio:125000, imagen:"https://via.placeholder.com/200x200.png?text=Set+Dia+Noche"},
    {nombre:"Labial Brillo Rosa", descripcion:"Labial con efecto gloss hidratante.", precio:32000, imagen:"https://via.placeholder.com/200x200.png?text=Labial+Brillo"},
    {nombre:"Perfume Floral Essence", descripcion:"Aroma fresco y femenino.", precio:98000, imagen:"https://via.placeholder.com/200x200.png?text=Perfume+Floral"},
    {nombre:"Crema Manos y Uñas", descripcion:"Hidratación profunda para manos y uñas.", precio:25900, imagen:"https://via.placeholder.com/200x200.png?text=Crema+Manos"},
    {nombre:"BB Cream Cobertura Media", descripcion:"Cobertura natural y ligera.", precio:69000, imagen:"https://via.placeholder.com/200x200.png?text=BB+Cream+Media"},
    {nombre:"Protector Labial SPF15", descripcion:"Protege y suaviza los labios.", precio:22000, imagen:"https://via.placeholder.com/200x200.png?text=Protector+Labial"},
    {nombre:"Sérum Vitamina C", descripcion:"Ilumina y revitaliza la piel.", precio:84000, imagen:"https://via.placeholder.com/200x200.png?text=Serum+Vitamina+C"},
    {nombre:"Paleta Labios 5 Tonos", descripcion:"Colores versátiles para cada look.", precio:45000, imagen:"https://via.placeholder.com/200x200.png?text=Paleta+Labios"}
  ];

  const contenedor = document.getElementById("productos-grid");
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  let carrito = [];

  // Render productos
  productos.forEach((p, index) => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <span class="precio">$${p.precio.toLocaleString()}</span>
        <button class="btn" onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
        <a href="https://wa.me/573125954950?text=Hola%20Estefanía,%20quiero%20el%20${encodeURIComponent(p.nombre)}%20de%20Glaffa%20Beauty" target="_blank" class="btn">Pedir por WhatsApp</a>
      </div>
    `;
  });

  // Función para agregar al carrito
  window.agregarAlCarrito = function(index) {
    carrito.push(productos[index]);
    actualizarCarrito();
  }

  // Actualiza carrito en pantalla
  function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;
    carrito.forEach((p, i) => {
      listaCarrito.innerHTML += `<li>${p.nombre} - $${p.precio.toLocaleString()} <button onclick="eliminarDelCarrito(${i})">❌</button></li>`;
      total += p.precio;
    });
    totalCarrito.textContent = total.toLocaleString();
  }

  // Eliminar producto del carrito
  window.eliminarDelCarrito = function(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }
};
