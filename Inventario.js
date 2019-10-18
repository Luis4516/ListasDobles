export default class Inventario{
    constructor(tableArt,tableInfo){
        this._tableArt = tableArt;
        this._tableInfo = tableInfo;
        this._numArt = 0;
        this._precio = 0;
        this._primero = null;
        this._ultimo = null;
        console.log(this._articulos);
    }

    _borrar(row,articulo){
        let btnBorrar = document.createElement("input");
        btnBorrar.type="button";
        btnBorrar.value = "Borrar";
        btnBorrar.className = "btn btn-danger";
        btnBorrar.addEventListener("click",()=>{
          this.borrarArticulo(row, articulo);
        });
        row.cells[5].innerHTML="";
        row.cells[5].appendChild(btnBorrar);
    }
    AgregarProducto(objArticulo){
      if(this._primero == null) {
        this._primero = objArticulo;
        this._ultimo = objArticulo;
      }
      else {
        let gUltimo = this._ultimo;
        this._ultimo.siguiente = objArticulo;
        this._ultimo = objArticulo;
        this._ultimo.anterior = gUltimo;

      }
      console.log(this._primero);
    }

    AgregarATabla(articulo){
        let row = this._tableArt.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        row.insertCell(5);
        

        cellCodigo.innerHTML = articulo.codigo;
        cellNombre.innerHTML = articulo.nombre;
        cellPrecio.innerHTML = articulo.precio;
        cellCantidad.innerHTML = articulo.cantidad;
        cellDescripcion.innerHTML = articulo.descripcion;
        this._borrar(row,articulo);

        
        this._numArt++; 

        
        this._precio += (articulo.precio * articulo.cantidad);

        this._tableInfo.rows[0].cells[1].innerHTML = this._numArt;
        this._tableInfo.rows[1].cells[1].innerHTML = this._precio;

        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descipcion: articulo.descripcion
        };

        return objArticulo;
    }
    borrarArticulo(row,articulo){
        let pos = this._buscarArticulo(articulo.codigo);
        if(pos == this._primero){
          this._primero = pos.siguiente;
        }
        else {
          let pos = this._buscarArticulo(articulo.codigo);
          if(pos == this._primero){
            this._primero = pos.siguiente;
          }
          else {
            let pos2 = this._buscarArtAnt(articulo.codigo);
            pos.siguiente.anterior = pos2;
            pos2.siguiente = pos.siguiente
          }
        }
        console.log(this._primero);
        row.remove();
    }

    _buscarArtAnt(codigo){
      var buscar = this._primero;
      while(buscar.siguiente.codigo != codigo) {
        buscar = buscar.siguiente;
      }
      return buscar;
    }

    
    _buscarArticulo(codigo){
      var buscar = this._primero;
      while(buscar.codigo != codigo) {
        buscar = buscar.siguiente;
      }
      return buscar;
    }
    
    Invertir() {
      let ultimo = this._ultimo;
      while(ultimo !== null) {
        console.log('Invertido por código' + ultimo.codigo)
        ultimo = ultimo .anterior;
      }
    }
}