
$(function () {
            $(".hamBtn").click(function(){

                            console.log($(this).hasClass("active"));
                    if (!($(this).hasClass("active"))) {
//                            $(this).removeClass("active");
//                            $(".sideBar").css("left", "-150%");
//                        } else {
                            $(this).addClass("active");
                            $(".sideBar").css("left", "0%");
                        }
                    })

            $(".closeBtn").click(function() {
                $(".hamBtn").removeClass("active");
                $(".sideBar").css("left","-150%");
            })




})

