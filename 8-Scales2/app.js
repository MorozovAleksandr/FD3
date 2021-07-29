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
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    return Tomato;
}());
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
var apple3 = new Apple('Белый налив2', 5);
var tomato1 = new Tomato('Чери', 1);
var scale1 = new Scale();
scale1.add(apple1);
scale1.add(apple2);
scale1.add(apple3);
scale1.add(tomato1);
console.log(scale1.getSumScale(), scale1.getNameList());
//# sourceMappingURL=app.js.map