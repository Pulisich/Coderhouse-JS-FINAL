//CARDS ITEMS EN JQUERY

//FUNCIÓN QUE ME HACE LAS CARDS

const renderProductos =()=>{
    for (const producto of productos) {
     
        $(".ulistaProd").append(`<li class="list-group-item border-0"><h3> ${producto.tipo}</h3></li>
    
        <li class="list-group-item border-0"><h2>  Relleno: ${producto.relleno}</h2></li>
     
        <div> <img src= ${producto.foto} width: "55" height: "auto" class = "imgProd"></div>
     
        <li class="list-group-item border-0"><p> Cantidad por caja: ${producto.caja}</p></li>
     
        <li class="list-group-item border-0"><b> Precio: $${producto.precio}</b></li>
     
        <button type="button" id="boton${producto.id}"> Agregar al carro </button> `); //Genera un botón por cada producto con su propio ID
    
    
        //BOTONES PARA AGREGAR AL CARRO POR CADA ITEM

        $(`#boton${producto.id}`).on("click",function(){
            
            //REMOVEMOS EL TOTAL DEL CARRO CADA VEZ QUE AGREGAMOS UN PRODUCTO Y SE ACTUALIZA DESPUÉS

            let enCarro= $(".total").children().remove("#totalCarro");

            //ME CREA UNA MINI CARD DEL PRODUCTO EN EL CARRO

            console.log(`${producto.tipo}  relleno de  ${producto.relleno} agregado al carro`)
            
            $("#dentro").append(`<div id="itemCarro"><p> ${producto.tipo}</p>
            
            <p>${producto.relleno}</p>
            
            <p>${producto.caja}</p
            
            <p>$${producto.precio}</p>
          
            </div> `)



            //AGREGA PRODUCTOS AL ARRAY CARRITO USANDO PUSH, EL CONSTRUCTOR ES PASTA, LOS DATOS VIENEN DE LOS PRODUCTOS
           
            listaCarrito.push(new Pasta (producto.tipo, producto.relleno, producto.caja, producto.precio));
                    
            console.log(listaCarrito);
            

            // CARRITO ALMACENADO EN LOCAL STORAGE LOS PRODUCTOS TIENEN SU PROPIO ID
        
            localStorage.setItem("En Carro",JSON.stringify(listaCarrito))
            
            //CALCULO EL TOTAL DEL CARRO USANDO REDUCE PARA AGARRAR EL PRECIO

          
            const total = listaCarrito.map( producto => producto.precio).reduce((prev, next)=> prev + next);
          
          
            console.log( "Su total es de: $" + total);


            //BORRA EL TOTAL DE ANTES
                     
            $(".total").children().remove("#totalCarro");

            //ACTUALIZA EL TOTAL

            $(".total").prepend(`<p id="totalCarro">TOTAL: $${total}</p>`)
                
            
                
        })
            
    }
}

//ORDENAR CARDS POR PRECIO.

function compare (a, b){
    if (a.precio < b.precio){
        return -1;
    }
    return 0;
 }


 JSON.stringify(productos.sort(compare));


//ARRAY DE PRODUCTOS DEL CARRITO

const listaCarrito= [];

class Pasta {
    constructor(tipo, relleno, caja, precio){
        this.tipo= tipo;
        this.relleno= relleno;
        this.caja= caja;
        this.precio= precio;
        
    }
};




