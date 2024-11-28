import { Pizza } from "../models/Pizza";
export interface PizzaBuilder {
    reset(): PizzaBuilder;
    setSize(size: string): PizzaBuilder;
    setDough(dough: string): PizzaBuilder;
    addTopping(topping: string): PizzaBuilder;
    getResult(): Pizza;
}
