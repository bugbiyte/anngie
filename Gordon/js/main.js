// Make it rain!!
//Modal appears when register button is clicked //

$('.header-button').on('click', function () {
  $('.modal').fadeIn('fast');
})

$('.close').on('click', function () {
  $('.modal').fadeOut('fast');
})

//Modal text disappears when submit is clicked and TY language appears //

$('.submit').on('click', function () {
  $('.modal-copy').hide();
})

$('.submit').on('click', function () {
  $('.modal-thanks').show();
})
