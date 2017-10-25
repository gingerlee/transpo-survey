$(document).ready(function() {
  $("form#stress").submit(function(event) {
    $("#results").show();
    $("input:checkbox[name=stress-warning]:checked").each(function(){
      var warningInputs = $(this).val();

      var warningArray = [];
        warningArray.push(warningInputs);



    // });
    // $("input:checkbox[name=stress-symptom]:checked").each(function(){
    //   var symptomInputs = $(this).val();
    //
    // });
    //
    // $("input:checkbox[name=stress-coping]:checked").each(function(){
    //   var copingInputs = $(this).val();

    });

  });

});
