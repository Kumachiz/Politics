$(document).ready(function() {

  $("form#views").submit(function(event) {
    var choice = $("input:radio[name=choice]:checked").val();
    var death_penalty = $("input:radio[name=death_penalty]:checked").val();


    if (choice === 'pro-choice' && death_penalty === 'No') {
      $("#liberal_text").show();
    }
    else if (choice === 'pro-choice' && death_penalty === 'Yes') {
      $("#moderate_text").show();
    } else {
      $("#conservative_text").show();
    }


  event.preventDefault();

});
});
