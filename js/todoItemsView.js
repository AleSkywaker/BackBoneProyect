var TodoItemsView = Backbone.View.extend({
    tagName:'ul',
    id:'todoitems',
    className:"todo",

    initialize:function(options){
        if(!(options && options.model))
            throw new Error('No hay ningun modelo especificado!! mensaje enviado desde todoItemsView');

        this.model.on("add", this.onAddTodoItem, this);
    },
    onAddTodoItem: function(todoItem){
        var view = new TodoItemView({model: todoItem});
        this.$el.prepend(view.render().$el);
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
        this.model.add(todoItem);
        $textBox.val("");
        }
    },

    render:function(){
        var self = this;

        this.model.each(function(todoItem){
            var view = new TodoItemView({model:todoItem});
            self.$el.append(view.render().$el);
        });
        this.$el.append("<input type='text' autofocus id='newTodoItem' placeholder='¿Que tarea tienes?'></input>" )
        this.$el.append("<button id='add'>Añadir</button>");

        return this;
    }
})