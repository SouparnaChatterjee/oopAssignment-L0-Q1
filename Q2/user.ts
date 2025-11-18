class User {
    public name: string;
    private orgCode: string = "DuckCorp";
    protected role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    introduce() {
        console.log(`I am ${this.name} from ${this.orgCode}`);
    }
}

class Manager extends User {
    constructor(name: string) {
        super(name, "Manager");
    }

    getRole() {
        console.log(this.role);  // Allowed (protected)
    }
}

const u = new User("Daffy", "Employee");
u.introduce();    // I am Daffy from DuckCorp

const m = new Manager("Donald");
m.getRole();      // Manager

// ❌ Trying to access orgCode directly will cause compile error:
// console.log(u.orgCode);   // ERROR: Property 'orgCode' is private
