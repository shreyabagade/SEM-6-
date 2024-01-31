// Union Types
type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape, dimensions: number[] | [number, number]): number {
    if (shape === "circle") {
        const [radius] = dimensions as [number];
        return Math.PI * Math.pow(radius, 2);
    } else if (shape === "square") {
        const [side] = dimensions as [number];
        return Math.pow(side, 2);
    } else if (shape === "triangle") {
        const [base, height] = dimensions as [number, number];
        return 0.5 * base * height;
    } else {
        throw new Error("Invalid shape");
    }
}

// Tuples
let circleDimensions: [number] = [5];
let squareDimensions: [number] = [4];
let triangleDimensions: [number, number] = [3, 6];

console.log("Circle area:", getArea("circle", circleDimensions));
console.log("Square area:", getArea("square", squareDimensions));
console.log("Triangle area:", getArea("triangle", triangleDimensions));

// Access Modifiers
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public makeSound(): void {
        console.log("Generic animal sound");
    }
}

class Cat extends Animal {
    private numberOfLives: number;

    constructor(name: string, numberOfLives: number) {
        super(name);
        this.numberOfLives = numberOfLives;
    }

    public makeSound(): void {
        console.log("Meow!");
    }

    public getLives(): number {
        return this.numberOfLives;
    }
}

const myCat = new Cat("Whiskers", 9);
console.log("Cat name:", myCat.getName());
console.log("Cat lives:", myCat.getLives());
myCat.makeSound();
