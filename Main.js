import Articulo from "./Articulo.js";
import Inventario from "./Inventario.js";

class Main{
    constructor(){
        let inventario = new Inventario(
            document.querySelector("#tableArt"),
            document.querySelector("#tableInfo")
        );
        
    document.querySelector("#btnAgregar").addEventListener("click",() => {
        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let precio = Number(document.querySelector("#precio").value);
        let cantidad = document.querySelector("#cantidad").value;
        let descripcion = document.querySelector("#descripcion").value;
        let toString = document.querySelector("#toString");
        
        let objArticulo = {
            codigo: codigo,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            descripcion: descripcion
        };

        let articulo = new Articulo(objArticulo);
            inventario.AgregarATabla(articulo);
            inventario.AgregarProducto(articulo);
            inventario.Invertir(articulo);
        
        toString.textContent = articulo.toString();
    });
    
    }
}

var m = new Main()