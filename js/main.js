
$(document).ready(function(){
  //navbar
    $('.navbar').hide()
    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
          $('.navbar').fadeOut()
        }else{
          $('.navbar').fadeIn()
        }
    })

    // greeting
    //greeting
    const greetings = ['Hello', 'Hola', 'Namaskar', 'God dag', 'Bonjour', 'Shalom',
    'Hallo', 'Zdravstvuyte', '你好']

    setInterval(function () {
      $('#welcome').animate({opacity:0})
      .queue(function(){
        $(this).text(greetings[Math.floor(Math.random()*greetings.length)])
        .dequeue()
      }).animate({opacity: 1})
      // $('#welcome').text(greetings[Math.floor(Math.random()*greetings.length)]).fadeIn()
}, 2500); // Execute somethingElse() every 2 seconds.

})
