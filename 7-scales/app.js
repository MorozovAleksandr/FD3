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
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, scale) {
        return _super.call(this, name, scale) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, scale) {
        return _super.call(this, name, scale) || this;
    }
    return Tomato;
}(Product));
var Scale = /** @class */ (function () {
    function Scale() {
        this.arrayProducts = [];
    }
    Scale.prototype.add = function (product) {
        this.arrayProducts.push(product);
    };
    Scale.prototype.getSumScale = function () {
        var sumScale = 0;
        this.arrayProducts.forEach(function (item) {
            sumScale += item.getScale();
        });
        return sumScale;
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        this.arrayProducts.forEach(function (item) {
            nameList.push(item.getName());
        });
        return nameList;
    };
    return Scale;
}());
var apple1 = new Apple('Антоновка', 3);
var apple2 = new Apple('Белый налив', 2);
var tomato1 = new Tomato('Чери', 1);
var scale1 = new Scale();
scale1.add(apple1);
scale1.add(apple2);
scale1.add(tomato1);
console.log(scale1.getSumScale(), scale1.getNameList());
//# sourceMappingURL=app.js.map