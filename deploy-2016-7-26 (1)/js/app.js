$(document).foundation()
$(document).ready(function(){
    
    $("h3").hover(function(){
        $("h3").css("text-decoration","none");
        $("h3").css("text-decoration","underline");
    });
    
    $(".par2").hover(function(){
        $(".par2").css("border-width","thick");
    });
    
});