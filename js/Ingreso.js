// Clase Ingreso que hereda de Dato
class Ingreso extends Dato {
    static contadorIngresos = 0;

    // Se crea un constructor para ir aumentando la variable id de cada ingreso encontrado en el array
    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = Ingreso.contadorIngresos++;
    }

    getId() {
        return this._id;
    }
}