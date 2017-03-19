AFRAME.registerComponent('loader', {


    schema: {
        location: {type: "string"},
    },


    init: function() {

        var data = this.data;
        var el = this.el;
        var that = this;

        el.addEventListener("loaded", function (e) {

            console.log(e);
        })

    },



});