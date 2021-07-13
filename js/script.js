 
$("#ButtonPost").click( function(e){
    console.log("Yes");
    e.preventDefault();
    
    var to_do = $("#todoText").val(); 
    var list = $("#todoList"); 
    
    var div = $("<div />");

    $('<input />', { type: 'checkbox', name: "todo"}).appendTo(div);
    $('<label />', {  text: to_do }).appendTo(div);

    list.append(div);

    $("#todoText").val('');

});

$("#ButtonClear").click(function TodoClear(){
    var todos = $("[name='todo']");
    for (var i = 0; i < todos.length; i ++){
        todos[i].checked = false; 
    }
});
 
$("#ButtonMark").click(function TodoMark(){
    var todos = $("[name='todo']");
    for (var i = 0; i < todos.length; i ++){
        todos[i].checked = true; 
    }

});
 
$("#ButtonDelete").click(function TodoDel(){
    
    var todos = $("[name='todo']");

    for (var i = todos.length-1; i >= 0; i--){
        if(todos[i].checked){
            todos[i].parentElement.remove();
        }
    }
    
});