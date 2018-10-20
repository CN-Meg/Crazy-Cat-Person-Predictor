$("button").click(function() {
    var name = $(".name").val();
    var catNumber = parseInt($(".catNumber").val());
    var cute = $(".cuteNotCute").val();
    var totalCats = catNumber +17 ;
    
    $(".container").hide();
    $(".results").show();
    $(".results").text(name + ", by the year 2050, everyone will succumb to the cuteness of cats! You will own a whopping " + totalCats + " cats. Stock up on your yarn balls and catnip now, don't buy a new couch anytime soon, and look forward to your future of cuddles and hairballs! ");
    $("body").css("background-image", "url('https://3milliondogs.com/blog-assets-two/2014/12/01.jpg')");
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-size", "cover");
});



