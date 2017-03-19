AFRAME.registerComponent('link', {

    schema: {

        from: {type: "selector"},
        to: {type: "selector"},


    },

    init: function() {

        var from = this.data.from;
        var to = this.data.to;
        var el = this.el;

        el.addEventListener("click", function () {

            from.setAttribute("visible", "false");
            from.className = "deactive";
            to.setAttribute("visible", "true");
            to.className = "active";

        });
    },
});

