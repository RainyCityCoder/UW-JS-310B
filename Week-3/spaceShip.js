// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate(){
        const { name, topSpeed } = this;
        console.log(`${name} moving to ${topSpeed}`);
    };
};

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const mFalcon = new SpaceShip('Millenium Falcon', 'point-five past lightspeed');
const enterpriseD = new SpaceShip('USS Enterprise', 'Warp 9.5')

mFalcon.accelerate();
enterpriseD.accelerate();