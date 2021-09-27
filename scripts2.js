//READY Y LOAD

$(document).ready(function(){


//SE CARGAN LOS COMPONENTES DE LA PÁGINA.

     $("#header").slideUp(1)
     .slideDown(2000)
 
     $(".ulistaProd").slideUp(0)
     .slideDown(5000)
 
     $("footer").slideUp(0)
     .slideDown(10000)

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
})