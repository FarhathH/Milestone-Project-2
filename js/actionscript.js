
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
    
    //For keeping track of the outfit chosen and decides which outfit will be displayed
    var outfitSelected = localStorage.getItem("savedOutfit");
    var finalOutfit =["assets/images/firstOutfit.webp", "assets/images/secondOutfit.webp", 
        "assets/images/thirdOutfit.webp", "assets/images/fourthOutfit.webp", "assets/images/AmyRoseIdlePose.webp"];

    //Set in the case that the user picks nothing.    
    var defaultOutfit = localStorage.getItem('nothing');
    localStorage.setItem('nothing', 4);

    // Should redirect user to the dress up screen via click event handler
    $("#begin").click(function(){
        window.location.href = "dressupscreen.html";
    });

    //Checking the condition if the localStorage has any value before displaying the chosen outfit on the results
    if(localStorage.getItem("savedOutfit") != null){
            $("#chosen-outfit").attr("src", finalOutfit[outfitSelected]);
        }else{
            $("#finalMessage").html("Aww. You didn't like the outfits?");
            $("#chosen-outfit").attr("src", finalOutfit[defaultOutfit]);
        } 

     /**
     * interaction for user selection on different outfits.
     */
    $("#no-1").click(function(){
        $("#amy-idle-pose").attr("src", "assets/images/firstOutfit.webp");
        localStorage.setItem('savedOutfit', 0);
        console.log(outfitSelected);
    });
    $("#no-2").click(function(){
        $("#amy-idle-pose").attr("src", "assets/images/secondOutfit.webp");
        localStorage.setItem('savedOutfit', 1);
        console.log(outfitSelected);
    });
    $("#no-3").click(function(){
        $("#amy-idle-pose").attr("src", "assets/images/thirdOutfit.webp");
        localStorage.setItem('savedOutfit', 2);
        console.log(outfitSelected);
    });
    $("#no-4").click(function(){
        $("#amy-idle-pose").attr("src", "assets/images/fourthOutfit.webp");
        localStorage.setItem('savedOutfit', 3);
        console.log(outfitSelected);
    });

    //Should redirect the user to the result page via click event handler
    $("#time-for-results").click(function(){
        window.location.href = "results.html";
        console.log(outfitSelected);
    });

    //Should allow user to go back to the dress-up screen
    $("#play-again").click(function(){
        window.location.href = "dressupscreen.html";
        localStorage.clear();
    });

    //Allows user to go back to the main menu
    $("#truly-finished").click(function(){
        window.location.href = "index.html";
        localStorage.clear();
    });
    
   
}); 
