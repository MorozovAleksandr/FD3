class Product {
    name: string;
    scale: number;

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


class Apple extends Product {
    constructor(name: string, scale: number) {
        super(name, scale);
    }
}


class Tomato extends Product {
    constructor(name: string, scale: number) {
        super(name, scale);
    }
}


class Scale {
    arrayProducts: Array<Object>;

    constructor() {
        this.arrayProducts = [];
    }

    add(product: Object): void {
        this.arrayProducts.push(product);
    }

    getSumScale(): number {
        let sumScale: number = 0;
        this.arrayProducts.forEach((item: any) => {
            sumScale += item.getScale();
        })
        return sumScale;
    }

    getNameList(): Array<string> {
        let nameList: Array<string> = [];
        this.arrayProducts.forEach((item: any) => {
            nameList.push(item.getName());
        })
        return nameList;
    }
}


let apple1 = new Apple('Антоновка', 3);
let apple2 = new Apple('Белый налив', 2);
let tomato1 = new Tomato('Чери', 1);
let scale1 = new Scale();

scale1.add(apple1);
scale1.add(apple2);
scale1.add(tomato1);
console.log(scale1.getSumScale(), scale1.getNameList());