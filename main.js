$(document).ready(function(){
    let ir_a = $(".desplazar");


    ir_a.click(function(evento){
        evento.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top-80,
            }, 1000
        )
    })
})