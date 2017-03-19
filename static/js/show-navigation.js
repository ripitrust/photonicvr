AFRAME.registerComponent('show-navigation', {

    schema :{

        target: { type: "selector"},
        hide: { type: "selector"},
        name: { type: "string"}
    },

    init: function() {

        var data = this.data;
        var el = this.el;
        var that = this;

      el.addEventListener("click", function () {


           var target = data.target;

           var subcontrols = document.querySelectorAll(".sub-control");

           var hideElement = data.hide;

            if (subcontrols) {

                    subcontrols.forEach( function(v, i) {

                    
                        that.hideChildren(v);


                    })
            }

            if (hideElement) {

               

                that.hideChildren(hideElement);

            }

            if (target) {
                
                target.setAttribute("visible", "true");

                that.showChildren(target);


            }


    });

    },


    hideChildren: function (parentNode) {


            for (var k = 0; k < parentNode.children.length; k ++) {

                                parentNode.children[k].setAttribute("visible", "false");

                                console.log(parentNode.children[k].children[0]);

                               if (parentNode.children[k].children[0])
                                parentNode.children[k].children[0].setAttribute("class", "disabled");

                        }

    },

    showChildren: function (parentNode) {

            for (var k = 0; k < parentNode.children.length; k ++) {

                            parentNode.children[k].setAttribute("visible", "true");

                            if (parentNode.children[k].children[0])
                                    parentNode.children[k].children[0].setAttribute("class", "enabled");

                        }

    }

})
