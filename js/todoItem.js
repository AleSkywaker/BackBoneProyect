var TodoItem = Backbone.Model.extend({
    defaults:{
        completada:false
    },
    url: "fakeUrl",
    
    validate: function(attrs){
        if(!attrs.description)
            return "Description is required.";
    },
    toggle: function(){
            this.set('completada', !this.get('completada'))
    }
});