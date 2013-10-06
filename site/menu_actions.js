$(document).ready(function(){
    $("#spinner").spinner({innerRadius: 20, outerRadius: 50, dashes: 20, strokeWidth: 2});
    var openContent = "audio";
    $(".menu-button a").click(function(event){

        if(event.target.id != openContent){
            $("#spinner").css("display", "inline");
            $("#"+openContent+"-content").fadeOut('slow', function(){
                openContent = event.target.id;
                $("#"+openContent+"-content").fadeIn('slow', function(){
                    $("#spinner").css("display", "none");
                });

            });
        }
    });
});