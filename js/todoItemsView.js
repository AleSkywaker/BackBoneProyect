var TodoItemsView = Backbone.View.extend({
    

    initialize:function(options){
        if(!(options && options.model))
            throw new Error('No hay ningun modelo especificado!! mensaje enviado desde todoItemsView');

        this.model.on("add", this.onAddTodoItem, this);
        this.model.on("remove", this.onRemoveTodoItem, this);
    },
    onRemoveTodoItem:function(todoItem){
        this.$("li#" + todoItem.id).remove();
    },
    onAddTodoItem: function(todoItem){
        var view = new TodoItemView({model: todoItem});
        this.$('#todoItems').append(view.render().$el);
    },
    events:{
        "click #add": "onClickAdd",
        "keypress #newTodoItem": "onKeyPress"
    },
    onKeyPress:function(e){
         if (e.keyCode == 13){
           this.onClickAdd();
         }    
    },
    onClickAdd: function(){
        var $textBox = this.$("#newTodoItem");
        if($textBox.val()){
        var todoItem = new TodoItem({ description : $textBox.val()});
        todoItem.save();
        this.model.add(todoItem);
        $textBox.val("");
        }
    },

    render:function(){
        var self = this;

        /* this.$el.append("<input type='text' autofocus id='newTodoItem' placeholder='¿Que tarea tienes?'></input>" )
        this.$el.append("<button id='add'>Añadir</button>");
        this.$el.append("<ul id='todoItems'></ul>"); */

        var template = $('#todoItemsTemplate').html();
        var html = Mustache.render(template);
        this.$el.html(html);

       

        return this;
    }
})