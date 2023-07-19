class Car {
    #id: number;
    color: string;
    isElectric: boolean;

    constructor(id: number, color: string, isElectric: boolean) {
        this.#id = id;
        this.color = color;
        this.isElectric = isElectric;
    }

    getId() : number {
        return this.#id;
    }

    setId(id:number) : void {
        this.#id = id;
    }
}


const d : Car = new Car(5, "Green", false);

console.log(d.getId());
d.setId(3);
console.log(d.getId());