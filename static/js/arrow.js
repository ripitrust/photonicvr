AFRAME.registerGeometry('arrow', {
  schema: {
    vertices: {
      default: ['-10 10 0', '-10 -10 0', '10 -10 0'],
    }
  },
  init: function (data) {
    var geometry = new THREE.Geometry();

    var vector1 = new THREE.Vector3(0,0,1);
    var vector2 = new THREE.Vector3(1,0,0);
    var vector3 = new THREE.Vector3(1,1,0);

    var vector4 = new THREE.Vector3(0,0,0.5);
    var vector5 = new THREE.Vector3(0.5,0,0);
    var vector6 = new THREE.Vector3(0.5,0.5,0);

    geometry.vertices.push(vector1);
    geometry.vertices.push(vector2);
    geometry.vertices.push(vector3);

    geometry.vertices.push(vector4);
    geometry.vertices.push(vector5);
    geometry.vertices.push(vector6);

    geometry.faces.push( new THREE.Face3( 0, 1, 2 ));
    geometry.faces.push( new THREE.Face3( 3, 4, 5 ));

    this.geometry = geometry;
  }
});