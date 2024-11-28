import { PizzaDirector } from "./director/PizzaDirector";
import { MargheritaPizzaBuilder } from "./builders/MargheritaPizzaBuilder";
import { PepperoniPizzaBuilder } from "./builders/PepperoniPizzaBuilder";

function main(): void {
    // Criação do Diretor
    const director = new PizzaDirector(new MargheritaPizzaBuilder());

    // Criação da Pizza Margherita
    console.log("Criando Pizza Margherita:");
    const margheritaPizza = director.makeMargheritaPizza();
    margheritaPizza.display();

    // Troca para o Builder de Pepperoni
    director.setBuilder(new PepperoniPizzaBuilder());

    // Criação da Pizza Pepperoni
    console.log("\nCriando Pizza Pepperoni:");
    const pepperoniPizza = director.makePepperoniPizza();
    pepperoniPizza.display();

    // Criação de uma Pizza Personalizada
    console.log("\nCriando Pizza Personalizada:");
    const customBuilder = new MargheritaPizzaBuilder();
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
