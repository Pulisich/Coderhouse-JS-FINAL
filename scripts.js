//READY y LOAD
$(document).ready(function(){
    
    //PRODUCTOS EN EL LOCAL STORAGE
        
    localStorage.setItem("Productos disponibles", JSON.stringify(productos));
        
    //CARDS DE LOS PRODUCTOS    

    renderProductos();



    //VER CARRITO CON JQUERY

        
    $("#carrito").on("click", function(){
        $(".oculto").toggle(500);
    })



    //PAGAR CON MERCADOPAGO EN JQUERY

    $("#pagarItem").on("click", function(){
        Swal.fire({
            icon: 'error',
            title: '¡Chan!',
            text: 'Mercado Pago no está funcionando, probá más tarde o pedí por WhatsApp',
            footer: '<a href="https://api.whatsapp.com/send?phone=543584909380" target="blank">Pedir por WhatsApp</a>'
        })
    })

    // 



    //LIMPIAR CARRO ¡AHORA EN JQUERY!

    $("#limpiarCarro").on("click", function(){
        $("#dentro").children().remove();

        localStorage.clear();


        localStorage.setItem("Productos disponibles", JSON.stringify(productos));

        //CHAU TODOS LOS ITEMS, CUANDO AGREGÁS OTRO ITEM AL CARRO YA VACÍO SE REINICIA TODO

         localStorage.getItem("En Carro", listaCarrito.splice([0]))

        
        
        
        Swal.fire({
            
            icon: 'success',
            title: 'El carro está vacío',
            showConfirmButton: false,
            timer: 1000
        })

        console.log("El carro está vacío")
    })



    //Se carga la página 

    $("#header").slideUp(1)
    .slideDown(2000)

    $(".ulistaProd").slideUp(0)
    .slideDown(5000)

    $("footer").slideUp(0)
    .slideDown(10000)



})


//CARDS ITEMS EN JQUERY

//FUNCIÓN QUE ME HACE LAS CARDS

const renderProductos =()=>{
    for (const producto of productos) {
     $(".ulistaProd").append(`<li class="list-group-item"><h3> ${producto.tipo}</h3></li>
     <li class="list-group-item"><h2>  Relleno: ${producto.relleno}</h2></li>
     <div> <img src= ${producto.foto} width: "55" height: "auto" class = "imgProd"></div>
     <li class="list-group-item"><p> Cantidad por caja: ${producto.caja}</p></li>
     <li class="list-group-item"><b> Precio: $${producto.precio}</b></li>
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
            <button class="btn-danger quitarItem"> Quitar </button></div> 
            `)



            //AGREGA PRODUCTOS AL CARRITO USANDO PUSH, EL CONSTRUCTOR ES PASTA, LOS DATOS VIENEN DE LOS PRODUCTOS
           
            listaCarrito.push(new Pasta (producto.tipo, producto.relleno, producto.caja, producto.precio));
                    
            console.log(listaCarrito);
            

            // CARRITO ALMACENADO EN LOCAL STORAGE LOS PRODUCTOS TIENEN SU PROPIO ID
        
            localStorage.setItem("En Carro",JSON.stringify(listaCarrito))
            
            //CALCULO EL TOTAL DEL CARRO USANDO REDUCE PARA AGARRAR EL PRECIO

           const total = listaCarrito.map( producto => producto.precio).reduce((prev, next)=> prev + next);
          
           console.log( "Su total es de: $" + total);
         
            //ACTUALIZAMOS EL TOTAL

           let totalCarro = $(".total").prepend(`<p id="totalCarro">TOTAL: $${total}</p>`)




             //PARA SACAR EL ITEM DEL CARRO DE A UNO
     
            let quitarCarro = document.getElementsByClassName("quitarItem")
            
            for( var i = 0; i < quitarCarro.length; i++){
                let boton = quitarCarro[i];
                boton.addEventListener("click", function(event){
                    let botonClick= event.target;
                    botonClick.parentElement.remove(function(){
                        botonClick.parentElement.fadeOut(3000)
                    });
                    console.log(` ${producto.tipo}  relleno de  ${producto.relleno} eliminado del carro.`)


                    localStorage.getItem("En Carro", listaCarrito.splice(0 , 1))
                    localStorage.setItem("En Carro",JSON.stringify (listaCarrito))
                   
                })
            }


                     
            $(".total").children().remove("#totalCarro");

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




//ARRAY DE PRODUCTOS DEL CARRITO

const listaCarrito= [];

class Pasta {
    constructor(tipo, relleno, caja, precio){
        this.tipo= tipo;
        this.relleno= relleno;
        this.caja= caja;
        this.precio= precio;
        
    }
//ACÁ A LO MEJOR PUEDE ESTAR LA RESPUESTA PARA CALCULAR EL TOTAL
};


console.log(productos.sort(compare));


