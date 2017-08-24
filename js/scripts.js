$(document).ready(function(){
  $("form#fortune_teller").submit(function(event){
    event.preventDefault();
    $("#unlucky_response").show();
    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unluckyResponse = $(this).val();
      $("#unlucky_response").append("<li>" + unluckyResponse + "</li>");
    });
    $("#lucky_response").show();
    $("input:checkbox[name=lucky]:checked").each(function() {
      var luckyResponse = $(this).val();
      $("#lucky_response").append("<li>" + luckyResponse + "</li>");
    });
    $("#fortune_teller").hide();
  });
});
