let Circle = function (radius) {
    this.radius = radius;
    this.getradius = function () {
        return radius;
    }
    this.getArea = function () {
        return Math.PI * radius * radius;
    }
    this.getCircuit=function () {
        return Math.PI*2*radius;
    }
}
let circle = new Circle(5);
let radius = circle.getradius(); // 2
let circuit=circle.getCircuit();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area+"; circuit: "+circuit);