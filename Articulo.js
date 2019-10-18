export default class Articulo {
    constructor(articulo) {
      this._codigo = articulo.codigo;
      this._nombre = articulo.nombre;
      this._precio = articulo.precio;
      this._cantidad = articulo.cantidad;
      this._descripcion = articulo.descripcion;
      this._siguiente = null;
      this._anterior = null;
    }

    get siguiente() {
      return this._siguiente;
    }

    set siguiente(siguiente) {
      this._siguiente = siguiente;
    }
    
    get anterior() {
      return this._anterior;
    }

    set anterior(anterior) {
      this._anterior = anterior;
    }
    get codigo() {
      return this._codigo;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    get precio() {
      return this._precio;
    }

    get cantidad() {
        return this._cantidad;
    }

    get descripcion() {
        return this._descripcion;
    }

    toString() {
        let string = `artículo: ${this._nombre} 
        código: ${this._codigo} 
        precio: ${this._precio}`
        return string;
    }
  }