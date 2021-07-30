interface IStorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}

class Scale<StorageEngine extends IStorageEngine> {
    storage: StorageEngine;

    constructor(_storage: StorageEngine) {
        this.storage = _storage;
    }

    add(product: Product): void {
        this.storage.addItem(product);
    }

    getSumScale(): number {
        let sumScale: number = 0;
        for (let i = 0; i < this.storage.getCount(); i++) {
            sumScale += this.storage.getItem(i).getScale();
        }
        return sumScale;
    }

    getNameList(): Array<string> {
        let nameList: Array<string> = [];
        for (let i = 0; i < this.storage.getCount(); i++) {
            nameList.push(this.storage.getItem(i).getName());
        }
        return nameList;
    }
}

class ScalesStorageEngineArray {
    items: Array<Product>;

    constructor() {
        this.items = [];
    }

    addItem(item: Product): void {
        this.items.push(item);
    }

    getItem(index: number): Product {
        return this.items[index];
    }

    getCount(): number {
        return this.items.length;
    }
}

class ScalesStorageEngineLocalStorage {
    localStorageItem: string = "products";

    constructor() {
        localStorage.setItem(this.localStorageItem, "[]");
    }

    addItem(item: Product): void {
        let array: Array<Product> = JSON.parse(localStorage.getItem(this.localStorageItem));
        array.push(item);
        let serialArr = JSON.stringify(array);
        localStorage.setItem(this.localStorageItem, serialArr);
    }

    getItem(index: number): Product {
        let array: any = JSON.parse(localStorage.getItem(this.localStorageItem));
        return new Product(array[index].name, array[index].scale);
    }

    getCount(): number {
        let array: Array<Product> = JSON.parse(localStorage.getItem(this.localStorageItem));
        return array.length;
    }
}

class Product {
    private name: string;
    private scale: number;

    constructor(_name: string, _scale: number) {
        this.name = _name;
        this.scale = _scale;
    }

    getName(): string {
        return this.name;
    }

    getScale(): number {
        return this.scale;
    }
}

let apple1 = new Product('Антоновка', 5);
let apple2 = new Product('Белый налив', 2);
let tomato1 = new Product('Чери', 1);
let scale1 = new Scale<ScalesStorageEngineArray>(new ScalesStorageEngineArray);
let scale2 = new Scale<ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage);

scale1.add(apple1);
scale1.add(apple2);
scale1.add(tomato1);
console.log(scale1.getSumScale(), scale1.getNameList());

scale2.add(apple1);
scale2.add(apple2);
scale2.add(tomato1);
console.log(scale2.getSumScale(), scale2.getNameList());