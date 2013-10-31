$(document).ready(function(){
    $("#spinner").spinner({innerRadius: 20, outerRadius: 50, dashes: 20, strokeWidth: 2});
    var openContent = "about";
    $(".menu-button a").click(function(event){

        if(event.target.id != openContent){
            $("#spinner").css("display", "inline");
            $("#"+openContent+"-content").fadeOut('slow', function(){
                openContent = event.target.id;
                $("#"+openContent+"-content").css('display', 'inline').fadeIn('slow', function(){
                    $("#spinner").css("display", "none");
                });

            });
        }
    });

    $("#audio-files a").click(function(event){
        $("#audio-player").attr("src", "/static/music/"+event.target.id+".ogg");
        var aplayer = document.getElementById("audio-player");
        aplayer.play();
    });


});