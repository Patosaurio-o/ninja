class Ninja {
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

class Sensei extends Ninja {
  constructor(name, healtPoints, speed=3, force=3, wisdom=10){
    super(name, healtPoints, speed, force)   
    this.wisdom = wisdom;
  }
  speakWisdom() {
    console.log('Cuando ea joven mi maestro dijo unas sabias palabras las cuales no recuerdo por que fui a hacer pipi.');
    super.drinkSake();
  }
}

const ninja_1 = new Ninja('Rock Lee', 10);
const ninja_2 = new Ninja('Akali', 13, 4, 5);
const ninja_3 = new Ninja('Zed', 8, 6, 7);
const superSensei = new Sensei("Master Splinter");