import { Pizza } from "../models/Pizza";
import { PizzaBuilder } from "../builders/PizzaBuilder";

export class PizzaDirector {
    private builder: PizzaBuilder;

    constructor(builder: PizzaBuilder) {
        this.builder = builder;
    }

    setBuilder(builder: PizzaBuilder): void {
        this.builder = builder;
    }

    makeMargheritaPizza(): Pizza {
        return this.builder
            .reset()
            .setSize("grande")
            .setDough("fina")
            .addTopping("Queijo")
            .addTopping("Tomate")
            .addTopping("Manjericão")
            .getResult();
    }

    makePepperoniPizza(): Pizza {
        return this.builder
            .reset()
            .setSize("média")
            .setDough("tradicional")
            .addTopping("Queijo")
            .addTopping("Pepperoni")
            .getResult();
    }
}
