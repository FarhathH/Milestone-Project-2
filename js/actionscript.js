
/**
 * tested the jQuery with this code
 */


/**
 * 
 * $("button").click(function(){
    $("body").css("backgroundColor", "black");
    $("p").css("color", "yellow");
});
 
 */
$(document).ready(function(){
    
  // jQuery methods go here...
    $("#begin").click(function(){
        $("p").remove();
        
    });
}); 
