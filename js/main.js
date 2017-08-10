
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
$(document).ready(function(){
    var todoItems = new TodoItems([
        new TodoItem({description: "Vacaciones"}),
        new TodoItem({description: "Leer"})
    ]);

    var todoItemsView = new TodoItemsView({model : todoItems});
    $('body').append(todoItemsView.render().$el);
})