$(document).ready(function(){

  // $('.box').on('click', function() {
  //    $('.box').addClass('color');
  //  })

   var color = 'white'
    var colors = 'white green red blue yellow brown tan'

   $('.box').on('click', function() {
    $(this).addClass(color);
  })

  $('.box').on('dblclick', function() {
  $(this).removeClass(color);
})

$('#reset').on('click', function() {
  $('.box').removeClass(colors)
})
$('#brown').on('click', function() {
  color = 'brown';
})
$('#tan').on('click', function() {
  color = 'tan';
})

$('#red').on('click', function() {
  color = 'red';
})

$('#blue').on('click', function() {
  color = 'blue';
})

$('#green').on('click', function() {
  color = 'green';
})

$('#yellow').on('click', function() {
  color = 'yellow';
})

$('#white').on('click', function() {
  color = 'white';
})





});
