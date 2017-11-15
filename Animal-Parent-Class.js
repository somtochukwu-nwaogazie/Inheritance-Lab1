class Animal{
  constructor(name){
    this._name = name;
    this._type = 'pet';
    this._hunt = 0;
  }
  
  get name(){
    return this.name;
  }
  
  get type(){
    return this._type;
  }
  
  get hunt(){
    return this._hunt;
  }
  
  incrementHunt(){
    return this._hunt++;
  }
}

class Dog extends Animal {
  constructor(name, zoology) {
    super(name);
    this._zoology = zoology;
  }
}

class Cat extends Animal {
  constructor(name, zoology) {
    super(name);
    this._zoology = zoology;
  }
}


const bryanCat = new Cat('Bryan', 'feline');
console.log(bryanCat.type);
console.log(bryanCat._name + ' : ' + bryanCat._zoology);

for (let count = 0; count <= bryanCat.type.length; count++){
  console.log('hunt: ' + bryanCat.incrementHunt());
  }


const dogZeus = new Dog ('Zeus', 'canine');
console.log(dogZeus._name + ' : ' + dogZeus._zoology);
// console.log(dogZeus._zoology);
console.log('hunt: ' + dogZeus.incrementHunt());
console.log('hunt: ' + dogZeus.incrementHunt());