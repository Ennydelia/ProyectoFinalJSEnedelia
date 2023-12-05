// Arreglos de ingresos y egresos (Cambios para detectar las clases externas)
let ingresos = [
    new Ingreso('Salario', 20000), 
    new Ingreso('Venta auto', 50000),
    new Ingreso('Venta juguetes', 400)
];

let egresos = [
    new Egreso('Renta', 4000), 
    new Egreso('Ropa', 800)
];

// Función cargarCabecero
const cargarCabecero = () => {
    // const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = totalEgresos() / totalIngresos();

    // console.log(presupuesto);
    // console.log(porcentajeEgreso);
    // console.log(totalIngresos());
    // console.log(totalEgresos());

    // Se obtiene en la consola el resultado de los formatos
    formatoPorcentaje(porcentajeEgreso);
    // Obtener el formato moneda para los diferentes metodos
    let presupuesto = totalIngresos() - totalEgresos();
    presupuesto =  formatoMoneda(presupuesto);

    let totallIng = totalIngresos() ;
    totallIng = formatoMoneda(totallIng);
    
    let totallEge = totalEgresos() ;
    totallEge = formatoMoneda(totallEge);

    // Actualizar elementos en el DOM
    document.getElementById('presupuesto').innerHTML = presupuesto;
    document.getElementById('porcentaje').innerHTML = porcentaje;
    document.getElementById('ingresos').innerHTML = totallIng;
    document.getElementById('egresos').innerHTML = totallEge;
};

// Función totalIngresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (const ingreso of ingresos) {
        // totalIngreso += ingreso.valor;
        totalIngreso += ingreso._valor;
    }
    return totalIngreso;
};

// Función totalEgresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of egresos) {
        // totalEgreso += egreso.valor;
        totalEgreso += egreso._valor;
    }
    return totalEgreso;
};

// YA NO SE USARA POR TEMAS DE LOS AVANCES
// Arreglos de egresos e ingresos (Se agrega la opcion Descripcion/Valor para poder realizar los for)
// let egresos = [
//     { descripcion: "Ropa", valor: 900 }, 
//     { descripcion: "Renta", valor: 400 }
// ];
// let ingresos = [
//     { descripcion: "Quincena", valor: 9000 }, 
//     { descripcion: "Venta", valor: 400 }
// ];

// Darle formato a la moneda
const formatoMoneda = (formatoM) =>{
    // console.log(presupuesto.toLocaleString("es-MX", {style: "currency", currency: "MXN", maximumFractionDigits: 2}));
    // console.log(totalIng.toLocaleString("es-MX", {style: "currency", currency: "MXN", maximumFractionDigits: 2}));
    // console.log(totalEge.toLocaleString("es-MX", {style: "currency", currency: "MXN", maximumFractionDigits: 2}));
    return formatoM.toLocaleString("es-MX", {style: "currency", currency: "MXN", maximumFractionDigits: 2});   
}

//Darle formato al porcentaje
const formatoPorcentaje = (porcentajeEgreso) => {
    porcentaje = porcentajeEgreso.toLocaleString("es-MX", {style: "percent", maximumFractionDigits: 2});
}

// Validar el funcionamiento de cargarCabecero
// cargarCabecero(); -- Se cambia por funcion Cargar APP para mandar la info cargada

// Funcion cargarApp, para mandar la informacion cargada
function cargarApp(){
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

// Cambios en el div de ingresos
const crearIngresoHTML = (ingreso) => {
    const ingresoHTML = `<div id="lista-ingresos">
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn"><ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso._id})"></ion-icon></button>
            </div>
        </div>
    </div>`

    return ingresoHTML;
    // console.log(ingreso)
}


// Funcion de Cargar ingresos para la seccion Ingresos
const cargarIngresos = () => {
    let ingresosHTML = "";

    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    // Recuperar el elemento lista-ingresos por su id
    const listaIngresosElement = document.getElementById('lista-ingresos');
    if (listaIngresosElement) {
        listaIngresosElement.innerHTML = ingresosHTML;
    }
}

// Eliminar Ingresos
const eliminarIngreso = (id) =>{
    const indiceEliminar = ingresos.findIndex((ingreso) => ingreso._id === id);
    // Verifica si se encontró el índice
    if (indiceEliminar !== -1) {
        // alert(indiceEliminar);
        // Elimina el elemento del arreglo utilizando splice
        ingresos.splice(indiceEliminar, 1);

        // Hace recarga a la pagina con los totales
        cargarCabecero();
        cargarIngresos(); 
    } else {
        console.error(`No se encontró el elemento con id ${id}`);
    }
}

// Cambios en el div de egresos
const crearEgresoHTML = (egreso) => {
    const egresoHTML = `<div class="lista-egresos">
        <div class="elemento limpiarEstilos">            
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">21%</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn"><ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso._id})"></ion-icon></button>
                </div>
            </div>
        </div>
    </div>`

    return egresoHTML;
}


// Funcion de Cargar ingresos para la seccion Egresos
const cargarEgresos = () => {
    let egresosHTML = "";

    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }

    // Recuperar el elemento lista-egresos por su id
    const listaEgresosElement = document.getElementById('lista-egresos');
    if (listaEgresosElement) {
        listaEgresosElement.innerHTML = egresosHTML;
    }
}

// Eliminar Egresos
const eliminarEgreso = (id) =>{
    const indiceEliminar = egresos.findIndex((egreso) => egreso._id === id);
    // Verifica si se encontró el índice
    if (indiceEliminar !== -1) {
        //alert(indiceEliminar);
        // Elimina el elemento del arreglo utilizando splice
        egresos.splice(indiceEliminar, 1);

        // Hace recarga a la pagina con los totales
        cargarCabecero(); 
        cargarEgresos();
    } else {
        console.error(`No se encontró el elemento con id ${id}`);
    }
}

// Agregar informacion mediante funcion flecha
const agregarDato = () => {
    // Variable para el formulario
    const forma = document.getElementById("forma");

    // Obtiene las variables del formulario
    const tipo = forma.querySelector("#tipo").value;
    const descripcion = forma.querySelector("#descripcion").value;
    const valor = forma.querySelector("#valor").value;

    // Se hace validacion que no se encuentren vacios o que se encuentren con valores por default
    if (descripcion.trim() !== "Agregar Descripcion"  && valor.trim() !== 0 ) {
        // Validacion del tipo de ingreso
        if (tipo === "ingreso") {
            ingresos.push(new Ingreso(descripcion, parseFloat(valor)));

            // Invocar a la función cargarCabecero y cargarIngreso
            cargarCabecero();
            cargarIngresos();
        }
        else{
            egresos.push(new Egreso(descripcion, parseFloat(valor))); 
            cargarCabecero();
            cargarEgresos();
        }
    }
    else{
        alert("No se cuenta con informacion a agregar");
    }
}

