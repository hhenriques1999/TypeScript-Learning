class Car {
    id: number;
    color: string;
    isElectric: boolean;

    constructor(id: number, color: string, isElectric: boolean) {
        this.id = id;
        this.color = color;
        this.isElectric = isElectric;
    }
}


const d : Car = new Car(5, "Green", false);

console.log(d);