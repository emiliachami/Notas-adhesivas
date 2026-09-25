// ============================
// COTIZACIONES
// ============================

const COTIZACION_DOLAR = 1538;
const COTIZACION_EURO = 1780;


// ============================
// ELEMENTOS
// ============================

const nombreNota = document.getElementById("nombreNota");

const monto = document.getElementById("monto");

const moneda = document.getElementById("moneda");

const agregarNota = document.getElementById("agregarNota");

const resultadoPreview =
    document.getElementById("resultadoPreview");

const notas = document.getElementById("notas");

const modal = document.getElementById("modal");

const agregarPersonalizada =
    document.getElementById("agregarPersonalizada");

const cancelarNota =
    document.getElementById("cancelarNota");

const guardarNota =
    document.getElementById("guardarNota");

const tituloPersonalizado =
    document.getElementById("tituloPersonalizado");

const textoPersonalizado =
    document.getElementById("textoPersonalizado");

const compararGalletas =
    document.getElementById("compararGalletas");


// ============================
// ACTUALIZAR CONVERSIÓN
// ============================

function actualizarConversion() {

    const valor = Number(monto.value);

    if (!valor || valor <= 0) {

        resultadoPreview.textContent = "13 US$";

        return;
    }

    let resultado;
    let simbolo;

    if (moneda.value === "dolar") {

        resultado = valor / COTIZACION_DOLAR;

        simbolo = "US$";

    } else {

        resultado = valor / COTIZACION_EURO;

        simbolo = "€";
    }

    resultadoPreview.textContent =
        resultado.toFixed(2) + " " + simbolo;
}


// Detectar cambios en el monto

monto.addEventListener(
    "input",
    actualizarConversion
);


// Detectar cambios en la moneda

moneda.addEventListener(
    "change",
    actualizarConversion
);


// ============================
// AGREGAR NOTA DEL CONVERSOR
// ============================

agregarNota.addEventListener("click", function () {

    const titulo = nombreNota.value.trim();

    const valor = Number(monto.value);


    if (titulo === "") {

        alert("Escribí el nombre de la notita.");

        return;
    }


    if (!valor || valor <= 0) {

        alert("Ingresá un monto válido.");

        return;
    }


    let convertido;
    let monedaResultado;


    if (moneda.value === "dolar") {

        convertido = valor / COTIZACION_DOLAR;

        monedaResultado = "US$";

    } else {

        convertido = valor / COTIZACION_EURO;

        monedaResultado = "€";
    }


    crearNota(

        titulo,

        "$" + valor.toLocaleString("es-AR") +
        " = " +
        convertido.toFixed(2) +
        " " +
        monedaResultado

    );


    nombreNota.value = "";

    monto.value = "";

    actualizarConversion();

});


// ============================
// CREAR NOTITA
// ============================

function crearNota(titulo, texto) {

    const nuevaNota =
        document.createElement("div");

    nuevaNota.classList.add("nota");


    const tituloElemento =
        document.createElement("h3");

    tituloElemento.textContent = titulo;


    const textoElemento =
        document.createElement("p");

    textoElemento.textContent = texto;


    const botonEliminar =
        document.createElement("button");

    botonEliminar.textContent = "X";

    botonEliminar.classList.add("eliminar");


    botonEliminar.addEventListener(
        "click",
        function () {

            nuevaNota.remove();

        }
    );


    nuevaNota.appendChild(tituloElemento);

    nuevaNota.appendChild(textoElemento);

    nuevaNota.appendChild(botonEliminar);

    notas.appendChild(nuevaNota);
}


// ============================
// ABRIR NOTA PERSONALIZADA
// ============================

agregarPersonalizada.addEventListener(
    "click",
    function () {

        modal.classList.add("activo");

        tituloPersonalizado.value = "";

        textoPersonalizado.value = "";

    }
);


// ============================
// CANCELAR
// ============================

cancelarNota.addEventListener(
    "click",
    function () {

        modal.classList.remove("activo");

    }
);


// ============================
// GUARDAR NOTA PERSONALIZADA
// ============================

guardarNota.addEventListener(
    "click",
    function () {

        const titulo =
            tituloPersonalizado.value.trim();

        const texto =
            textoPersonalizado.value.trim();


        if (titulo === "" || texto === "") {

            alert(
                "Completá el título y el texto."
            );

            return;
        }


        crearNota(titulo, texto);


        modal.classList.remove("activo");

    }
);


// ============================
// COMPARAR GALLETAS
// ============================

compararGalletas.addEventListener(
    "click",
    function () {

        alert(
            "Acá podés comparar los precios de las galletitas."
        );

    }
);