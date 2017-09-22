// Make it rain!!
$('#showModal').on('click', function (){
  console.log ('buton is clicked')
  $('.modal-background').fadeIn();
})

$('#close').on('click', function(){
 console.log ('buton is clicked')
   $('.modal-background').fadeOut();
})
