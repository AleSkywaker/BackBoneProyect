
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
$(document).ready(function(){
    var todoItem = new TodoItem({ description : "Blade Runner" });
    var todoItemView = new TodoItemView({model : todoItem});
    $(body).append(todoItemView.render().$el);
})