var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getArea(shape, dimensions) {
    if (shape === "circle") {
        var radius = dimensions[0];
        return Math.PI * Math.pow(radius, 2);
    }
    else if (shape === "square") {
        var side = dimensions[0];
        return Math.pow(side, 2);
    }
    else if (shape === "triangle") {
        var _a = dimensions, base = _a[0], height = _a[1];
        return 0.5 * base * height;
    }
    else {
        throw new Error("Invalid shape");
    }
}
// Tuples
var circleDimensions = [5];
var squareDimensions = [4];
var triangleDimensions = [3, 6];
console.log("Circle area:", getArea("circle", circleDimensions));
console.log("Square area:", getArea("square", squareDimensions));
console.log("Triangle area:", getArea("triangle", triangleDimensions));
// Access Modifiers
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.makeSound = function () {
        console.log("Generic animal sound");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, numberOfLives) {
        var _this = _super.call(this, name) || this;
        _this.numberOfLives = numberOfLives;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Meow!");
    };
    Cat.prototype.getLives = function () {
        return this.numberOfLives;
    };
    return Cat;
}(Animal));
var myCat = new Cat("Whiskers", 9);
console.log("Cat name:", myCat.getName());
console.log("Cat lives:", myCat.getLives());
myCat.makeSound();
