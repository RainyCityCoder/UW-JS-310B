// for SpecRunner.html

describe("space defense 'game'", () => {
    describe("Light Star Fighter creation", () => {

        let shipHealth = 1;

        class BaseEnemy {
            constructor() {
            }
            attack() {
                shipHealth -= 1;
                return shipHealth;
            }
        }
        
        class Light extends BaseEnemy {
            constructor(name) {
                super();
                this.healthAmt = 2;
                this.name = name;
            }
            attack() {
                super.attack();
            }
        }

        it(`Should create new Object`, () => {
            let result = new Light("Light Fighter");
            expect(result instanceof Light).toBeTruthy();
        })

        it(`Should create new Object with name = Light Fighter`, () => {
            let result = new Light("Light Fighter");
            expect(result.name).toEqual("Light Fighter");
        })

        it("Should lower global variable shipHealth by 1 (to zero)", () => {
            let fighter = new Light('Name');
            fighter.attack();
            expect(shipHealth).toEqual(0);
        })

    })

    describe("Heavy Star Fighter creation", () => {

        let shipHealth = 1;

        class BaseEnemy {
            constructor() {
            }
            attack() {
                shipHealth -= 1;
                return shipHealth;
            }
        }

        class Heavy extends BaseEnemy {
            constructor(name) {
                super();
                this.healthAmt = 4;
                this.name = name;
            }
            attack() {
                super.attack();
            }
        }

        it(`should create new Object`, () => {
            let result = new Heavy("Heavy Fighter");
            expect(result instanceof Heavy).toBeTruthy();
        })

        it(`Should create new Object with name = Heavy Fighter`, () => {
            let result = new Heavy("Heavy Fighter");
            expect(result.name).toEqual("Heavy Fighter");
        })
        
        it("Should lower global variable shipHealth by 1 (to zero)", () => {
            let fighter = new Heavy('Name');
            fighter.attack();
            expect(shipHealth).toEqual(0);
        })
    })
    
});
