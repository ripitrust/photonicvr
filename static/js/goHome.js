

AFRAME.registerComponent('goHome', {

    schema: {

        current: {type: "selector"},

    },

    init: function() {

        var current = this.data.from;
        var el = this.el;
        var home = document.getElementById("home-scene");

        el.addEventListener("click", function () {

            console.log(home);

            current.setAttribute("visible", "false");
            current.className = "deactive";
            home.setAttribute("visible", "true");
            home.className = "active";


        });

    },



});