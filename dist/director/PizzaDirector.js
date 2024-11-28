"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDirector = void 0;
class PizzaDirector {
    constructor(builder) {
        this.builder = builder;
    }
    setBuilder(builder) {
        this.builder = builder;
    }
    makeMargheritaPizza() {
        return this.builder
            .reset()
            .setSize("grande")
            .setDough("fina")
            .addTopping("Queijo")
            .addTopping("Tomate")
            .addTopping("Manjericão")
            .getResult();
    }
    makePepperoniPizza() {
        return this.builder
            .reset()
            .setSize("média")
            .setDough("tradicional")
            .addTopping("Queijo")
            .addTopping("Pepperoni")
            .getResult();
    }
}
exports.PizzaDirector = PizzaDirector;
