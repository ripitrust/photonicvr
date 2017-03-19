AFRAME.registerComponent('route', {

    schema: {

        href: {type: "string"},
        hash: {type: "string"}

    },

    init: function() {

            var href = this.data.href;
            var hash = this.data.hash;
            var el = this.el;

             el.addEventListener("click", function () {

                console.log("clicked");

                location.assign( "/" + href + "#" + hash );

             });

    },



});