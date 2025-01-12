function Dog(name, breed, age, weight) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weight = weight;

  this.bark = function() {
    console.log(this.name + " says Woof!");
  }
}

const anotherDog = new Dog("Wyatt", "Lab", 2, 100);