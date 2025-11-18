// Interface-like structure
class IDuck {
    swim() {}
    fly() {}
    sound() {}
}

class ToyDuck extends IDuck {
    swim() {
        console.log("Can float on water");
    }

    fly() {
        console.log("Cannot fly");
    }

    sound() {
        console.log("Cannot sound");
    }
}

const t = new ToyDuck();
t.fly();    // Cannot fly
t.sound();  // Cannot sound
t.swim();   // Can float on water
