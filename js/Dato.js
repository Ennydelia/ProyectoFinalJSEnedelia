// Creacion de la clase padre Dato
class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
    }

    // Método get para obtener el valor del atributo descripcion
    get descripcion() {
        return this._descripcion;
    }

    // Método set para modificar el valor del atributo descripcion
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    // Método get para obtener el valor del atributo valor
    get valor() {
        return this._valor;
    }

    // Método set para modificar el valor del atributo valor
    set valor (Valor) {
        this._valor = Valor;
    }
}

