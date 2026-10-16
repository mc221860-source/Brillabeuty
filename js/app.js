
document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista-productos");
    const categoria = document.getElementById("categoria");
    const ordenar = document.getElementById("ordenar");
    const cantidad = document.getElementById("cantidad-productos");
    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    if (!lista || typeof PRODUCTOS === "undefined") {
        return;
    }

    // Agregar las categorías al menú
    CATEGORIAS.forEach(function (nombreCategoria) {
        const opcion = document.createElement("option");
        opcion.value = nombreCategoria;
        opcion.textContent = nombreCategoria;
        categoria.appendChild(opcion);
    });

    function mostrarProductos() {
        let productosMostrar = PRODUCTOS.slice();

        // Filtrar por categoría
        if (categoria.value !== "Todos") {
            productosMostrar = productosMostrar.filter(function (producto) {
                return producto.categoria === categoria.value;
            });
        }

        // Ordenar productos
        if (ordenar.value === "menor") {
            productosMostrar.sort(function (a, b) {
                return a.precio - b.precio;
            });
        } else if (ordenar.value === "mayor") {
            productosMostrar.sort(function (a, b) {
                return b.precio - a.precio;
            });
        } else if (ordenar.value === "nombre") {
            productosMostrar.sort(function (a, b) {
                return a.nombre.localeCompare(b.nombre);
            });
        }

        lista.innerHTML = "";

        productosMostrar.forEach(function (producto) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta-producto";

            const imagen = document.createElement("div");
            imagen.className = "imagen-producto";
            imagen.textContent = "💄";

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;

            const marca = document.createElement("p");
            marca.textContent = "Marca: " + producto.marca;

            const tipo = document.createElement("p");
            tipo.textContent = "Categoría: " + producto.categoria;

            const precio = document.createElement("p");
            precio.className = "precio-producto";
            precio.textContent = new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0
            }).format(producto.precio);

            const descripcion = document.createElement("p");
            descripcion.textContent = producto.descripcion;

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(nombre);
            tarjeta.appendChild(marca);
            tarjeta.appendChild(tipo);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(descripcion);

            lista.appendChild(tarjeta);
        });

        if (cantidad) {
            cantidad.textContent =
                "Cantidad de productos: " + productosMostrar.length;
        }
    }

    categoria.addEventListener("change", mostrarProductos);
    ordenar.addEventListener("change", mostrarProductos);

    mostrarProductos();
});
