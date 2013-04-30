$(document).ready(function(){

var input_value;


$('form').submit(function() {
  if ($('textarea').val() !== '') {
    input_value = $('textarea').val();
    $('.not_done').append('<li>' + input_value + '<input type="checkbox" id="checkbox" /><button class="remove"></button></li>');
  }
  $('textarea').val('');
  return false;
});

$(document).on('click', '.not_done #checkbox', function () {
  input_value = $(this).parent();
  $('.done').append('<li>' + input_value.text() + '<input type="checkbox" id="checkbox" checked/><button class="remove"></button></li>');
  $(this).parent().remove();
});


$(document).on('click', '.done #checkbox', function () {
  input_value = $(this).parent();
  $('.not_done').append('<li>' + input_value.text() + '<input type="checkbox" id="checkbox" /><button class="remove"></button></li>');
  $(this).parent().remove();
});

$(document).on('click', '.remove', function () {
  $(this).parent().remove();
});

});