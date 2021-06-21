$("ul").on("click","li",function(){
    $(this).toggleClass("completed")
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut("100",function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type = 'text']").keypress(function(event){
    var todo = $("input[type = 'text']").val()
    if(event.which === 13)
    {
        if($.trim(todo) === '')
        {
            alert("You cannot enter a empty todo!!");
            return false;
        }
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }
});
$("#plus").on("click",function(){
    $("input[type = 'text']").fadeToggle();
});
