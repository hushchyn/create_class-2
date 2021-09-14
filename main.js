function Animal(wool, tail, paws){
    this.wool = wool;
    this.tail = tail;
    this.paws = paws;
}

Animal.prototype.run = function(){
    console.log(`Can run`);
}

Animal.prototype.smell = function(){
    console.log(`Can small`);
}

function Herbivorous(){
    Animal.call(this)
}
Herbivorous.prototype = Object.create(Animal.prototype)
Herbivorous.prototype.constructor = Herbivorous


function Rabbit ( ears ){
    Herbivorous.call(this)
    this.ears = ears;
}
Rabbit.prototype = Object.create(Herbivorous.prototype)
Rabbit.prototype.constructor = Rabbit

Rabbit.prototype.eats = function(){
    console.log( `Like eats grass` );
}


function Elephant ( bigNose ){
    Herbivorous.call(this)
    this.bigNose = bigNose;
}
Elephant.prototype = Object.create(Herbivorous.prototype)
Elephant.prototype.constructor = Elephant

Elephant.prototype.drink = function (){
    console.log(` Can drink a lot of watter `);
}
 

function Predator(){
    Animal.call(this)
}
Predator.prototype = Object.create(Animal.prototype)
Predator.prototype.constructor = Predator


function Lion( woolColor){
    Predator.call(this)
    this.woolColor = woolColor;
}
Lion.prototype = Object.create(Predator.prototype)
Lion.prototype.constructor = Lion

Lion.prototype.growl = function(){
    console.log(`Can scare other animal`);
}


function Woolf( muscles ){
    Predator.call(this)
    this.muscles = muscles;
}
Woolf.prototype = Object.create(Predator.prototype)
Woolf.prototype.constructor = Woolf

Woolf.prototype.howl = function(){
    console.log(`Howl on the moon`);
}


