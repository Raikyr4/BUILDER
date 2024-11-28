export class Pizza {
    private size: string = "";
    private dough: string = "";
    private toppings: string[] = [];

    setSize(size: string): void {
        this.size = size;
    }

    setDough(dough: string): void {
        this.dough = dough;
    }

    addTopping(topping: string): void {
        this.toppings.push(topping);
    }

    display(): void {
        console.log(`Pizza - Tamanho: ${this.size}, Massa: ${this.dough}, Ingredientes: ${this.toppings.join(", ")}`);
    }
}
