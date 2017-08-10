var TodoItemsView = Backbone.View.extend({
    tagName:'ul',
    id:'todoitems',
    className:"todo",

    initialize:function(options){
        if(!(options && options.model))
            throw new Error('No hay ningun modelo especificado!! mensaje enviado desde todoItemsView');
    },
    render:function(){
        var self = this;
        this.model.each(function(todoItem){
            var view = new TodoItemView({model:todoItem});
            self.$el.append(view.render().$el);
        });
        return this;
    }
})