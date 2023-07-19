var Car = /** @class */ (function () {
    function Car(id, color, isElectric) {
        this.id = id;
        this.color = color;
        this.isElectric = isElectric;
    }
    return Car;
}());
var d = new Car(5, "Green", false);
console.log(d);
