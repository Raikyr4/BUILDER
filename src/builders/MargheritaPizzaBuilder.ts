import { Pizza } from "../models/Pizza";
import { PizzaBuilder } from "./PizzaBuilder";
export class MargheritaPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    reset(): PizzaBuilder {
        this.pizza = new Pizza();
        return this;
    }

    setSize(size: string): PizzaBuilder {
        this.pizza.setSize(size);
        return this;
    }

    setDough(dough: string): PizzaBuilder {
        this.pizza.setDough(dough);
        return this;
    }

    addTopping(topping: string): PizzaBuilder {
        this.pizza.addTopping(topping);
        return this;
    }

    getResult(): Pizza {
        return this.pizza;
    }
}
