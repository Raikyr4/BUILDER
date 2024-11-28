"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MargheritaPizzaBuilder = void 0;
const Pizza_1 = require("../models/Pizza");
class MargheritaPizzaBuilder {
    constructor() {
        this.pizza = new Pizza_1.Pizza();
    }
    reset() {
        this.pizza = new Pizza_1.Pizza();
        return this;
    }
    setSize(size) {
        this.pizza.setSize(size);
        return this;
    }
    setDough(dough) {
        this.pizza.setDough(dough);
        return this;
    }
    addTopping(topping) {
        this.pizza.addTopping(topping);
        return this;
    }
    getResult() {
        return this.pizza;
    }
}
exports.MargheritaPizzaBuilder = MargheritaPizzaBuilder;