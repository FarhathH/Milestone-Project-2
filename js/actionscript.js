
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
    
  // Should redirect user to the dress up screen
    $("#begin").click(function(){
        window.location.href = "dressupscreen.html";
        
    });
}); 
