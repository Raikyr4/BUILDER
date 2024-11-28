"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PizzaDirector_1 = require("./director/PizzaDirector");
const MargheritaPizzaBuilder_1 = require("./builders/MargheritaPizzaBuilder");
const PepperoniPizzaBuilder_1 = require("./builders/PepperoniPizzaBuilder");
function main() {
    // Criação do Diretor
    const director = new PizzaDirector_1.PizzaDirector(new MargheritaPizzaBuilder_1.MargheritaPizzaBuilder());
    // Criação da Pizza Margherita
    console.log("Criando Pizza Margherita:");
    const margheritaPizza = director.makeMargheritaPizza();
    margheritaPizza.display();
    // Troca para o Builder de Pepperoni
    director.setBuilder(new PepperoniPizzaBuilder_1.PepperoniPizzaBuilder());
    // Criação da Pizza Pepperoni
    console.log("\nCriando Pizza Pepperoni:");
    const pepperoniPizza = director.makePepperoniPizza();
    pepperoniPizza.display();
    // Criação de uma Pizza Personalizada
    console.log("\nCriando Pizza Personalizada:");
    const customBuilder = new MargheritaPizzaBuilder_1.MargheritaPizzaBuilder();
    const customPizza = customBuilder
        .reset()
        .setSize("pequena")
        .setDough("recheada")
        .addTopping("Queijo")
        .addTopping("Frango")
        .addTopping("Milho")
        .getResult();
    customPizza.display();
}
main();
