enum Color {
    Red,
    Green,
    Blue    
}

class Car {
    #id: number;
    color: Color;
    isElectric: boolean;

    constructor(id: number, color: Color, isElectric: boolean) {
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

    getColor() : Color {
        return this.color;
    }

}


const d : Car = new Car(5, Color.Green, false);

console.log(d.getId());