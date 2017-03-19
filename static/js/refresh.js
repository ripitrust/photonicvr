AFRAME.registerComponent('refresh', {

    schema: {

        on: {type: 'string'},
    },

    init: function() {


        console.log("runningrggg");

        var on = this.data.on;
        var el = this.el;

        el.components.raycaster.refreshObjects();

    },



});

