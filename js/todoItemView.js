var TodoItemView = Backbone.View.extend({
    tagName: 'li',

    initialize: function (options) {
        if (!(options && options.model))
            throw new Error('No has especificado el modelo!!');
        this.model.on("change", this.render, this);
    },
    events: {
        "click #toggle": "onClickToggle"
    },
    onClickToggle: function () {
      /*   if (this.model.get('escompletado'))
            console.log(this.model.set('escompletado', false))
        else
            console.log(this.model.set('escompletado', true)) */

        //PASAMOS LA RESPONSABILIDAD AL MODELO, PORQUE LA VISTA NO TIENE PORQUE SABER COMO FUNCIONA.
        // this.model.set('completada', !this.model.get("completada"));
        //ENCAPSULAMOS LA LOGICA CADA OBJETO ESCONDE SU LOGICA.
        //SIMPLEMENTE LLAMAMOS LA FUNCION 
        
        this.model.toggle();
        console.log(this.model.toJSON());
    },
    render: function () {
        this.$el.toggleClass("tareaCompletada", this.model.get("completada"));

        var checked = this.model.get('completada') ? "checked" : "";
        this.$el.html("<input id='toggle' type='checkbox' " + checked + "></input>" + this.model.escape("description"));
        return this;
    }
})