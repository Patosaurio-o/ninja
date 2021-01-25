class ninja {
  constructor(name, healtPoints, speed=3, force=3){
    this.name = name;
    this.healtPoints= healtPoints;
    this.speed = speed;
    this.force = force;      
  }
  sayName() {
    console.log(`nombre: ${this.name}`)
  }
  showStats() {
    console.log(
      `nombre: ${this.name}\nsalud: ${this.healtPoints}\nvelocidad: ${this.speed}\nfuerza: ${this.force}`
    ); 
  }
  drinkSake() {
    this.healtPoints += 10
    console.log(`mas 10 de salud`)
  }
}

const ninja_1 = new ninja('Rock Lee', 10);
const ninja_2 = new ninja('Akali', 13, 4, 5);
const ninja_3 = new ninja('Zed', 8, 6, 7);