
const productos = [
    // BASES
    ["Base liquida", "Blomshell", "Bases", 45000, "base1.jpg"],
    ["Base liquida", "Atenea", "Bases", 52000, "base2.jpg"],
    ["Base liquida", "Nars", "Bases", 40000, "base3.jpg"],
    ["Base liquida", "Lula", "Bases", 30000, "base4.jpg"],
    ["Base liquida", "Super", "Bases", 28000, "base5.jpg"],

    // RUBORES
    ["Rubor", "Sheglam", "Rubores", 22000, "rubor1.jpg"],
    ["Rubor", "Rare Beauty", "Rubores", 95000, "rubor2.jpg"],
    ["Rubor", "Atenea", "Rubores", 45000, "rubor3.jpg"],
    ["Rubor",  "Pixi", "Rubores", 30000, "rubor4.jpg"],
    ["Rubor", "Dior", "Rubores", 20000, "rubor5.jpg"],

    // LABIALES
    ["Labial", "YSL", "Labiales", 18000, "labial1.jpg"],
    ["Labial", "Dior", "Labiales", 85000, "labial2.jpg"],
    ["Labial", "Atenea", "Labiales", 28000, "labial3.jpg"],
    ["Labial", "MAC", "Labiales", 40000, "labial4.jpg"],
    ["Labial", "Vogue", "Labiales", 19000, "labial5.jpg"],

    // PESTAÑINAS
    ["Pestañina", "Maybelline", "Pestañinas", 35000, "pestañina1.jpg"],
    ["Pestañina", "L'Oréal", "Pestañinas", 45000, "pestañina2.jpg"],
    ["Pestañina", "Vogue", "Pestañinas", 22000, "pestañina3.jpg"],
    ["Pestañina", "Essence", "Pestañinas", 25000, "pestañina4.jpg"],
    ["Pestañina", "Prosa", "Pestañinas", 32000, "pestañina5.jpg"],


    //DELINEADORES
    ["Delineador", "Prosa", "Delineador", 18000, "delineador1.jpg"],
    ["Delineador", "Sephora", "Delineador", 18000, "delineador2.jpg"],
    ["Delineador", "NYX", "Delineador", 18000, "delineador3.jpg"],
    ["Delineador", "Beauty creation", "Delineador", 18000, "delineador4.jpg"],
    ["Delineador", "Elaya", "Delineador", 18000, "delineador5.jpg"],

    
    // SOMBRAS
    ["Paleta de sombras", "Beauty Creations", "Sombras", 35000, "sombras1.jpg"],
    ["Paleta de sombras", "NYX", "Sombras", 55000, "sombras2.jpg"],
    ["Sombras de sombras", "Dior", "Sombras", 30000, "sombras3.jpg"],
    ["Paleta de sombras", "Ruby Rose", "Sombras", 25000, "sombras4.jpg"],
    ["Paleta de sombras", "MAC", "Sombras", 120000, "sombras5.jpg"],

    // SKINCARE
    ["Limpiador facial", "Pond´s", "Skincare", 35000, "limpiador.jpg"],
    ["Tónico facial", "Garnier", "Skincare", 25000, "tonico.jpg"],
    ["Sérum facial", "Clinique", "Skincare", 65000, "serum.jpg"],
    ["Crema hidratante", "Neutrogena", "Skincare", 28000, "crema1.jpg"],
    ["Protector solar", "Nivea", "Skincare", 50000, "protector.jpg"],
    ["Agua micelar", "Garnier", "Skincare", 22000, "agua-micelar.jpg"],
    ["Exfoliante facial", "Eucerin", "Skincare", 32000, "exfoliante.jpg"],
    ["Mascarilla facial", "Garnier", "Skincare", 18000, "mascarilla.jpg"],
    ["Contorno de ojos", "Nivea", "Skincare", 30000, "contorno-ojos.jpg"],
    ["Bálsamo labial", "Vaseline", "Skincare", 12000, "balsamo.jpg"],


    // CORRECTORES
    ["Corrector", "Maybelline", "Correctores", 32000, "corrector1.jpg"],
    ["Corrector", "L'Oréal", "Correctores", 40000, "corrector2.jpg"],
    ["Corrector", "NYX", "Correctores", 38000, "corrector3.jpg"],
    ["Corrector", "Ruby Rose", "Correctores", 16000, "corrector4.jpg"],
    ["Corrector", "Blomshell", "Correctores", 35000, "corrector5.jpg"],

    // POLVOS
    ["Polvo", "Vogue", "Polvos", 24000, "polvo1.jpg"],
    ["Polvo", "Maybelline", "Polvos", 35000, "polvo2.jpg"],
    ["Polvo", "Ruby Rose", "Polvos", 18000, "polvo3.jpg"],
    ["Polvo", "Bissu", "Polvos", 30000, "polvo4.jpg"],
    ["Polvo", "MAC", "Polvos", 100000, "polvo5.jpg"],

    // ILUMINADORES
    ["Iluminador", "Rare Beauty", "Iluminadores", 90000, "iluminador1.jpg"],
    ["Iluminador", "Bissu", "Iluminadores", 25000, "iluminador2.jpg"],
    ["Iluminador", "Milani", "Iluminadores", 42000, "iluminador3.jpg"],
    ["Iluminador", "NYX", "Iluminadores", 38000, "iluminador4.jpg"],
    ["Iluminador", "sheglam", "Iluminadores", 22000, "iluminador5.jpg"],

    
];


let carrito = [];

const lista = document.getElementById("lista-productos");
const categoria = document.getElementById("categoria");

// CAMBIA ESTE NÚMERO POR TU WHATSAPP
const numeroWhatsApp = "573001234567";

// MOSTRAR PRODUCTOS
function mostrarProductos() {
    lista.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {
        if (categoria.value == "Todos" || categoria.value == productos[i][2]) {
            lista.innerHTML +=
                "<div class='producto'>" +
                    "<img src='Imagenes/" + productos[i][4] +
                    "' alt='" + productos[i][0] +
                    "' onclick='abrirDetalle(" + i + ")'>" +
                    "<h3>" + productos[i][0] + "</h3>" +
                    "<p>Marca: " + productos[i][1] + "</p>" +
                    "<p class='precio'>$" +
                    productos[i][3].toLocaleString("es-CO") +
                    "</p>" +
                    "<button onclick='agregarCarrito(" + i + ")'>" +
                    "Agregar al carrito</button>" +
                "</div>";
        }
    }
}

// AGREGAR AL CARRITO
function agregarCarrito(i) {
    carrito.push(productos[i]);
    mostrarCarrito();
    mostrarMensaje();
    cerrarDetalle();
}

// MENSAJE DE CONFIRMACIÓN
function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje-agregado");

    mensaje.textContent = "¡Producto agregado al carrito!";
    mensaje.classList.add("mostrar");

    setTimeout(function() {
        mensaje.classList.remove("mostrar");
    }, 2500);
}

// DETALLES DEL PRODUCTO
function abrirDetalle(i) {
    const producto = productos[i];

    document.getElementById("detalle-imagen").src =
        "Imagenes/" + producto[4];

    document.getElementById("detalle-imagen").alt = producto[0];
    document.getElementById("detalle-nombre").textContent = producto[0];
    document.getElementById("detalle-marca").textContent =
        "Marca: " + producto[1];

    document.getElementById("detalle-precio").textContent =
        "$" + producto[3].toLocaleString("es-CO");

    
    // DESCRIPCIÓN DIFERENTE PARA CADA PRODUCTO
    const descripciones = [
        // BASES
        "Blomshell: una base para crear un look uniforme y resaltar tu belleza natural.",
        "Atenea: ideal para completar tu maquillaje y conseguir un acabado bonito.",
        "Nars: una opción para lucir un maquillaje elegante y sofisticado.",
        "Lula: perfecta para crear un look sencillo y destacar tu estilo diario.",
        "Super: una alternativa para complementar tu rutina de maquillaje.",

        // RUBORES
        "Sheglam: añade un toque de color a tus mejillas y dale vida a tu look.",
        "Rare Beauty: resalta tus mejillas con un acabado delicado y femenino.",
        "Atenea: aporta un toque de color para un maquillaje fresco y natural.",
        "Pixi: ideal para darle a tu rostro una apariencia radiante y saludable.",
        "Dior: complementa tu maquillaje con un toque de color elegante.",

        // LABIALES
        "YSL: dale protagonismo a tus labios y completa tu look con estilo.",
        "Dior: un labial para lucir unos labios elegantes en cualquier ocasión.",
        "Atenea: añade color a tus labios y expresa tu personalidad.",
        "MAC: perfecto para crear looks clásicos, modernos o atrevidos.",
        "Vogue: el complemento ideal para darle color a tu maquillaje diario.",

        // PESTAÑINAS
        "Maybelline: ayuda a destacar tus pestañas y hacer que tu mirada resalte.",
        "L'Oréal: completa tu maquillaje de ojos con un toque llamativo.",
        "Vogue: ideal para darle protagonismo a tus pestañas en el día a día.",
        "Essence: un complemento para crear una mirada bonita y definida.",
        "Prosa: añade un toque especial a tu maquillaje y resalta tus ojos.",

        // DELINEADORES
        "Prosa: define el contorno de tus ojos y crea looks a tu gusto.",
        "Sephora: atrévete a crear delineados elegantes y estilos diferentes.",
        "NYX: ideal para experimentar con delineados clásicos o atrevidos.",
        "Beauty Creations: dale más expresión a tu mirada con tu delineado favorito.",
        "Elaya: completa tu maquillaje de ojos con un delineado que destaque.",

        // SOMBRAS
        "Beauty Creations: combina tonos y crea maquillajes llenos de personalidad.",
        "NYX: explora diferentes colores para looks naturales o intensos.",
        "Dior: añade tonos sofisticados a tu maquillaje de ojos.",
        "Ruby Rose: juega con los colores y deja volar tu creatividad.",
        "MAC: ideal para experimentar con combinaciones de sombras y acabados.",

        // SKINCARE
        "Pond's: limpiador facial para ayudar a retirar impurezas y limpiar el rostro.",
        "Garnier: tónico facial para complementar tu rutina después de la limpieza.",
        "Clinique: sérum facial para añadir un paso especial a tu cuidado de la piel.",
        "Neutrogena: crema hidratante para ayudar a mantener la piel suave.",
        "Nivea: protector solar para ayudar a proteger la piel de los rayos UV.",
        "Garnier: agua micelar para ayudar a retirar maquillaje e impurezas.",
        "Eucerin: exfoliante facial para complementar tu rutina de cuidado de la piel.",
        "Garnier: mascarilla facial para disfrutar de un momento de cuidado personal.",
        "Nivea: contorno de ojos para complementar el cuidado de la zona alrededor de los ojos.",
        "Vaseline: bálsamo labial para ayudar a mantener los labios suaves e hidratados.",

        // CORRECTORES
        "Maybelline: ayuda a disimular ojeras e imperfecciones y complementar la base.",
        "L'Oréal: ideal para dar un acabado uniforme a las zonas que deseas corregir.",
        "NYX: complementa tu maquillaje y ayuda a unificar visualmente el rostro.",
        "Ruby Rose: una opción para completar tu rutina de maquillaje facial.",
        "Blomshell: ayuda a perfeccionar el acabado de tu maquillaje.",

        // POLVOS
        "Vogue: ayuda a sellar el maquillaje y completar el acabado del rostro.",
        "Maybelline: ideal para complementar tu base y conseguir el acabado que buscas.",
        "Ruby Rose: añade un paso extra a tu rutina para finalizar el maquillaje.",
        "Bissu: ayuda a completar tu look y dar un acabado más pulido.",
        "MAC: un complemento para finalizar tu maquillaje con un toque profesional.",

        // ILUMINADORES
        "Rare Beauty: aporta un toque luminoso para destacar los puntos del rostro.",
        "Bissu: ilumina tu look con un toque de brillo en las zonas que prefieras.",
        "Milani: ideal para añadir luminosidad y darle vida a tu maquillaje.",
        "NYX: crea puntos de luz y experimenta con acabados radiantes.",
        "Sheglam: completa tu look con un toque brillante y lleno de estilo."
    ];

    let descripcion = descripciones[i] ||
        "Descubre este producto de belleza y encuentra tu estilo con BrillaBeuty.";

    document.getElementById("detalle-descripcion").textContent = descripcion;


    document.getElementById("detalle-agregar").onclick = function() {
        agregarCarrito(i);
    };

    document.getElementById("ventana-producto").classList.add("activa");
}

function cerrarDetalle() {
    document.getElementById("ventana-producto").classList.remove("activa");
}

function cerrarDetalleFondo(evento) {
    if (evento.target.id == "ventana-producto") {
        cerrarDetalle();
    }
}

// ABRIR Y CERRAR CARRITO LATERAL
function mostrarCarritoPanel(evento) {
    evento.preventDefault();
    document.getElementById("carrito").classList.toggle("visible");
}

function ocultarCarrito() {
    document.getElementById("carrito").classList.remove("visible");
}

// ACTUALIZAR CARRITO
function mostrarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    let total = 0;

    listaCarrito.innerHTML = "";

    if (carrito.length == 0) {
        listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
    }

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i][3];

        listaCarrito.innerHTML +=
            "<div class='producto-carrito'>" +
                "<p><b>" + carrito[i][0] + "</b></p>" +
                "<p>Marca: " + carrito[i][1] + "</p>" +
                "<p>Precio: $" +
                carrito[i][3].toLocaleString("es-CO") + "</p>" +
                "<button onclick='eliminarProducto(" + i + ")'>" +
                "Eliminar</button>" +
            "</div>";
    }

    document.getElementById("cantidad-carrito").textContent = carrito.length;
    document.getElementById("cantidad-menu").textContent = carrito.length;
    document.getElementById("total-carrito").textContent =
        total.toLocaleString("es-CO");
}

// ELIMINAR PRODUCTO
function eliminarProducto(i) {
    carrito.splice(i, 1);
    mostrarCarrito();
}

// VACIAR CARRITO
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}

// FINALIZAR COMPRA POR WHATSAPP
function finalizarCompra() {
    if (carrito.length == 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let total = 0;
    let texto = "Hola, quiero realizar esta compra en BrillaBeuty:%0A%0A";

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i][3];

        texto += "- " + carrito[i][0] +
            " (" + carrito[i][1] + "): $" +
            carrito[i][3].toLocaleString("es-CO") + "%0A";
    }

    texto += "%0ATotal: $" + total.toLocaleString("es-CO");
    texto += "%0A¿Me pueden indicar cómo realizar el pago y el envío?";

    const enlace = "https://wa.me/" + numeroWhatsApp + "?text=" + texto;

    window.open(enlace, "_blank");
}

// FILTRAR POR CATEGORÍA
categoria.addEventListener("change", mostrarProductos);

mostrarProductos();
mostrarCarrito();


