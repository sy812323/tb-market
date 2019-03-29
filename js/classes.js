$(function(){
    $(".tb-market-classes-content-nav li").click(function(event){
        if(event.currentTarget==this){
            $(".tb-market-classes-content-nav li").css({"color":"#9b9b9b","background-color":"#eee"});
            $(this).css({"color":"#333","background-color":"#fff"});
        };
    })
});