function Greetings(name) {
  return function () {
    console.log("Welcome to RICR!!!", name);
  };
}

const greetMuskan = Greetings("Muskan");
const greetPrince = Greetings("Prince");

greetMuskan();
greetPrince();