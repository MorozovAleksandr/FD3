interface IScalable {
    getName(): string;
    getScale(): number;
}

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

class Apple implements IScalable {

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

class Tomato implements IScalable {

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


class Scale {
    arrayProducts: Array<IScalable>;

    constructor() {
        this.arrayProducts = [];
    }

    add(product: IScalable): void {
        this.arrayProducts.push(product);
    }

    getSumScale(): number {
        let sumScale: number = 0;
        this.arrayProducts.forEach((item: IScalable) => {
            sumScale += item.getScale();
        })
        return sumScale;
    }

    getNameList(): Array<string> {
        let nameList: Array<string> = [];
        this.arrayProducts.forEach((item: IScalable) => {
            nameList.push(item.getName());
        })
        return nameList;
    }
}


let apple1 = new Apple('Антоновка', 3);
let apple2 = new Apple('Белый налив', 2);
let apple3 = new Apple('Белый налив2', 5);
let tomato1 = new Tomato('Чери', 1);
let scale1 = new Scale();

scale1.add(apple1);
scale1.add(apple2);
scale1.add(apple3);
scale1.add(tomato1);
console.log(scale1.getSumScale(), scale1.getNameList());