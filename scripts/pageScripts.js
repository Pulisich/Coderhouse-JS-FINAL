//ACÁ ESTÁN TODOS LOS SCRIPTS QUE SE PRE CARGAN EN LA PÁGINA

//READY Y LOAD
$(document).ready(function(){

     //CARGANDO ELEMENTOS DE LA PÁGINA 

     $("#header").slideUp(1)
     .slideDown(2000)
 
     $(".ulistaProd").slideUp(0)
     .slideDown(5000)
 
     $("footer").slideUp(0)
     .slideDown(10000)
 
    //LIMPIAMOS EL LOCAL STORAGE CADA VEZ QUE SE ACTUALIZA LA PÁGINA
    localStorage.clear()

    //PRODUCTOS DISPONIBLES ALMACENADOS EN EL LOCAL STORAGE
        
    localStorage.setItem("Productos disponibles", JSON.stringify(productos));
    
   

    // RENDERIZAR CARDS DE LOS PRODUCTOS   

    renderProductos();



    //VER CARRITO CON JQUERY

        
    $("#carrito").on("click", function(){
        $(".oculto").toggle(500);
    })



    //PAGAR CON MERCADOPAGO EN JQUERY (NO TENGO CREDENCIALES PARA AGREGAR LA API)

    $("#pagarItem").on("click", function(){
        Swal.fire({
            icon: 'error',
            title: '¡Chan!',
            text: 'Mercado Pago no está funcionando, probá más tarde o pedí por WhatsApp',
            footer: '<a href="https://api.whatsapp.com/send?phone=543584909380" target="blank">Pedir por WhatsApp</a>'
        })

        console.log("Credenciales de Mercado Pago no disponibles, por favor ordene por WhatsApp")
    })

    // 



    //LIMPIAR CARRO ¡AHORA EN JQUERY!

    $("#limpiarCarro").on("click", function(){
        $("#dentro").children().remove();

        //LIMPIA EL LOCAL STORAGE
        localStorage.clear();

        //REINICIA EL LOCAL STORAGE CON LOS PRODUCTOS DISPONIBLES

        localStorage.setItem("Productos disponibles", JSON.stringify(productos));

        //UNA VEZ QUE EL CARRITO SE LIMPIA, AL AGREGAR OTRO ITEM SE REINICIA EL MISMO

        localStorage.getItem("En Carro", listaCarrito.splice([0]))

        
        
        
        Swal.fire({
            
            icon: 'success',
            title: 'El carro está vacío',
            showConfirmButton: false,
            timer: 1000
        })

        console.log("El carro está vacío")
    })



   


})
