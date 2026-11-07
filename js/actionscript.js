
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


//Helps the code to load up ready for user interaction
$(document).ready(function(){
    
  // Should redirect user to the dress up screen via click event handler
    $("#begin").click(function(){
        window.location.href = "dressupscreen.html";
        
    });

    //Should redirect the user to the result page via click event handler
    $("#time-for-results").click(function(){
        window.location.href = "results.html";
    });

    //Should allow user to go back to the main menu
    $("#play-again").click(function(){
        window.location.href = "dressupscreen.html";
    });

    //Allows user to go back to the main menu
    $("#truly-finished").click(function(){
        window.location.href = "index.html";
    });
}); 
