//navbar
$(document).ready(function(){
    $('.navbar').hide()

    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
          $('.navbar').fadeOut()
        }else{
          $('.navbar').fadeIn()
        }
    })
})
