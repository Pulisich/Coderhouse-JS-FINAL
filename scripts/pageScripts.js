//READY Y LOAD
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
