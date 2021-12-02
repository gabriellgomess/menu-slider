
// $(document).ready(function(){
  // FUNCIONA ###############

  // $("#myBtn").click(function(){
  //     $("#myDropdown").toggle();
  // });

  // TAMBÉM FUNCIONA ###############

  // $("#btn").click(function(){
  //   $("#myDropdown").toggleClass("show");
  // })

  // FUNCIONA COM SLIDETOGGLE ###############

  $("#myBtn").click(function(){
    $("#myDropdown").slideToggle();
  }) 

// });



$("#criadiv").click(function(){
  $('#root').append('<div></div>');
    let cont = $("#root > div").length
    var element = $("#root").find("div")
    console.log( element[0] )
  $("#resposta").html("+"+cont)
})

 