// Clase Egreso que hereda de Dato
class Egreso extends Dato {
    static contadorEgresos = 0;

    // Se crea un constructor para ir aumentando la variable id de cada egreso encontrado en el array
    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = Egreso.contadorEgresos++;
    }

    getId() {
        return this._id;
    }
}