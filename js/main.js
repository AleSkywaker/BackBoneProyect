

$(document).ready(function(){
    var todoItems = new TodoItems([
        new TodoItem({id:1, description: "Vacaciones"}),
        new TodoItem({id:2, description: "Leer"})
    ]);

    var todoItemsView = new TodoItemsView({model : todoItems});
    $('body').append(todoItemsView.render().$el);
})