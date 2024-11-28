"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    constructor() {
        this.size = "";
        this.dough = "";
        this.toppings = [];
    }
    setSize(size) {
        this.size = size;
    }
    setDough(dough) {
        this.dough = dough;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    display() {
        console.log(`Pizza - Tamanho: ${this.size}, Massa: ${this.dough}, Ingredientes: ${this.toppings.join(", ")}`);
    }
}
exports.Pizza = Pizza;
