$(document).ready(function() {
    clickeddisc = false;
    clickedknow = false;
    clickedgentuza = false;
    $('#wrapgentuza').hide();
    $('.disc').hover(			
        function () {
            $(this).css({
                "background-color":"white",
                "color":"black",
                "box-shadow" : "0vw 0vw  .2vw .2vw rgb(255,255,255)"
             });
        }, 
        function () {
           $(this).css({
               "background-color":"black",
               "color":"white",
               "box-shadow" : "0vw 0vw  .2vw .2vw rgb(0,0,0)"
            });
        }
     );
     $('.know').hover(			
        function () {
            $(this).css({
                "background-color":"white",
                "color":"black",
                "box-shadow" : "0vw 0vw  .2vw .2vw rgb(255,255,255)"
             });
        }, 
        function () {
           $(this).css({
               "background-color":"black",
               "color":"white",
               "box-shadow" : "0vw 0vw  .2vw .2vw rgb(0,0,0)"
            });
        }
     );
     $('.gentuza').hover(			
        function () {
            $(this).css({
                "background-color":"white",
                "color":"black",
                "box-shadow" : "0vw 0vw  .2vw .2vw rgb(255,255,255)"
             });
        }, 
        function () {
           $(this).css({
               "background-color":"black",
               "color":"white",
               "box-shadow" : "0vw 0vw  .2vw .2vw rgb(0,0,0)"
            });
        }
     );

        $('.disc').click(function(){
            if(clickeddisc == false){
                $(this).text("RaulGG#9438");
                if (screen.width > 768) {
                $('.know').css("left", "49vw")
                $('.gentuza').css("left", "63.6vw")
                clickeddisc = true;
                }
                else {
                    $(this).css("left", "19vw")
                    clickeddisc = true;
                }
            }
            else{
                $(this).text("Discord");
                if (screen.width > 768) {
                $('.know').css("left", "45vw")
                $('.gentuza').css("left", "59.6vw")
                if (clickedknow == true){
                    $('.gentuza').css("left", "63.6vw")
                    }
                else{clickeddisc = false;}
                }
                else {
                    clickeddisc = false;
                    $(this).css("left", "26vw")
                }
            
            
            }
        });

        $('.know').click(function(){
            if(clickedknow == false){
                if (screen.width > 768) {
                $('.gentuza').css("left", "63.6vw")
                $(this).html("<i class='fa-brands fa-html5'> 30% </i> <i class='fa-brands fa-css3-alt'> 60%</i> <i class='fa-brands fa-js-square'> 10%</i>");
                if (clickeddisc == true){
                    $('.gentuza').css("left", "68vw")
                    $('#panels').css("left", "68vw")
                    clickedknow = true;
                }
                else{
                    clickedknow = true;
                    $('.gentuza').css("left", "63.6vw")
                }
            }
            else {
                clickedknow = true;
                $(this).html("<i class='fa-brands fa-html5'> 30% </i> <i class='fa-brands fa-css3-alt'> 60%</i> <i class='fa-brands fa-js-square'> 10%</i>");
                $(this).css("left", "13vw")
            }
            }
            else{
                if (screen.width > 768) {
                $('.gentuza').css("left", "59.6vw")
                $(this).text("Conocimiento");
                $('#panels').css("left", "78vw")
                clickedknow = false;
                if (clickeddisc == true){
                    $('.gentuza').css("left", "68vw")
                }
            }
            else{
                clickedknow = false;
                $(this).text("Conocimiento");
                $(this).css("left", "26vw")
            }
        }
        });

        $('.gentuza').click(function(){
            if(clickedgentuza == false){
                if (clickedknow == true){
                    $('#wrapgentuza').fadeIn(1000);
                    $('.logos').css({
                        "left": "51.7vw",
                    })
                    clickedgentuza = true;
                }
                else{
                    $('#wrapgentuza').fadeIn(1000);
                    clickedgentuza = true;}
                    if (clickeddisc == true && clickedknow == true){
                        $('#wrapgentuza').fadeIn(1000);
                        clickedgentuza = true;
                    }
                    clickedgentuza = true;
                    if (clickeddisc == false && clickedknow == false){
                        $('#wrapgentuza').fadeIn(1000);
                        clickedgentuza = true;
                    }
                    if (clickeddisc == true) {

                        clickedgentuza = true;
                    }
                    if (clickedknow == true) {
                        $('.jaareetname').css("left", "67.6vw")
                        $('.jaaretlogo').css("left", "53vw")
                        $('.barikelooname').css("left", "67.6vw")
                        $('.barikeloologo').css("left", "56.6vw")
                        $('.reyselname').css("left", "67.6vw")
                        $('.reysellogo').css("left", "53vw")
                        $('.panelgentuza').css("left", "62.6vw")
                    }
                    if (screen.width < 768) {
                        $('.panelgentuza').css({
                            "left": "12vw",
                            "top": "162vw",
                            "padding-left": "26vw",
                            "line-height": "18vw",
                            "border-radius": "1vw",
                            "text-shadow": "0vw 0vw .2vw rgb(255, 255, 255)"
                        })
                        $('.logos').css({
                            "left": "-57vw",
                            "top": "-73vw",
                        })
                        clickedgentuza = true;
                    }
                    if (screen.width < 768) {
                        $('.panelgentuza').css({
                            "left": "12vw",
                            "top": "162vw",
                            "padding-left": "26vw",
                            "line-height": "18vw",
                            "border-radius": "1vw",
                            "text-shadow": "0vw 0vw .2vw rgb(255, 255, 255)"
                        })
                        $('.logos').css({
                            "left": "-57vw",
                            "top": "-73vw",
                        })
                        clickedgentuza = true;
                    }
                }
            else{
                $('#wrapgentuza').fadeOut(1000)
                clickedgentuza = false;
            }
        });
});
