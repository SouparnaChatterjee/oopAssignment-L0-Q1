// Fly Strategy Interface
class FlyStrategy {
    fly() {}
}

// FastFly Strategy
class FastFly extends FlyStrategy {
    fly() {
        console.log("Flying fast like a rocket!");
    }
}

// NoFly Strategy
class NoFly extends FlyStrategy {
    fly() {
        console.log("I cannot fly");
    }
}

// Duck class using Strategy Pattern
class Duck {
    constructor(flyStrategy) {
        this.flyStrategy = flyStrategy;
    }

    performFly() {
        this.flyStrategy.fly();
    }

    setFlyStrategy(strategy) {
        this.flyStrategy = strategy;
    }
}

// TEST
const duck = new Duck(new FastFly());
duck.performFly();          // Flying fast like a rocket!
duck.setFlyStrategy(new NoFly());
duck.performFly();          // I cannot fly
