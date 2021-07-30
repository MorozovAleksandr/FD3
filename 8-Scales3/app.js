var Scale = /** @class */ (function () {
    function Scale(_storage) {
        this.storage = _storage;
    }
    Scale.prototype.add = function (product) {
        this.storage.addItem(product);
    };
    Scale.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            sumScale += this.storage.getItem(i).getScale();
        }
        return sumScale;
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            nameList.push(this.storage.getItem(i).getName());
        }
        return nameList;
    };
    return Scale;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.localStorageItem = "products";
        localStorage.setItem(this.localStorageItem, "[]");
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var array = JSON.parse(localStorage.getItem(this.localStorageItem));
        array.push(item);
        var serialArr = JSON.stringify(array);
        localStorage.setItem(this.localStorageItem, serialArr);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var array = JSON.parse(localStorage.getItem(this.localStorageItem));
        return new Product(array[index].name, array[index].scale);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var array = JSON.parse(localStorage.getItem(this.localStorageItem));
        return array.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
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
var apple1 = new Product('Антоновка', 5);
var apple2 = new Product('Белый налив', 2);
var tomato1 = new Product('Чери', 1);
var scale1 = new Scale(new ScalesStorageEngineArray);
var scale2 = new Scale(new ScalesStorageEngineLocalStorage);
scale1.add(apple1);
scale1.add(apple2);
scale1.add(tomato1);
console.log(scale1.getSumScale(), scale1.getNameList());
scale2.add(apple1);
scale2.add(apple2);
scale2.add(tomato1);
console.log(scale2.getSumScale(), scale2.getNameList());
//# sourceMappingURL=app.js.map